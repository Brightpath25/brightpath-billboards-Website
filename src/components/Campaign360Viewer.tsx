"use client";

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Upload, Trash2, AlertTriangle, RotateCcw, CheckCircle } from 'lucide-react';

interface UploadedImage {
  file: File;
  url: string;
  thumbnail: string;
  dimensions?: { width: number; height: number };
}

const Campaign360Viewer: React.FC = () => {
  const [leftImage, setLeftImage] = useState<UploadedImage | null>(null);
  const [backImage, setBackImage] = useState<UploadedImage | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');
  const [warning, setWarning] = useState<string>('');
  const [autoRotate, setAutoRotate] = useState(true);
  const [modelLoaded, setModelLoaded] = useState(false);
  const [applyingTexture, setApplyingTexture] = useState(false);
  const [modelViewerReady, setModelViewerReady] = useState(false);
  const [showOverlay, setShowOverlay] = useState(true);

  // Load model-viewer library dynamically - only once
  useEffect(() => {
    if (typeof window === 'undefined') return;

    const loadModelViewer = async () => {
      try {
        if (!customElements.get('model-viewer')) {
          await import('@google/model-viewer');
        }
        // Small delay to ensure registration is complete
        setTimeout(() => setModelViewerReady(true), 100);
      } catch (err) {
        console.error('Failed to load model-viewer:', err);
        // Set ready anyway to show error state
        setModelViewerReady(true);
      }
    };

    loadModelViewer();
  }, []);

  // Set up model-viewer load event listener with fallback timeout and retry logic
  useEffect(() => {
    if (!modelViewerReady) return;

    let mounted = true;

    const checkModel = () => {
      if (!mounted) return;

      const modelViewer = document.getElementById('campaign-truck');
      if (!modelViewer) {
        setTimeout(checkModel, 100);
        return;
      }

      const handleLoad = () => {
        if (mounted) {
          console.log('✓ 3D model loaded successfully');
          setModelLoaded(true);
        }
      };

      const handleError = (e: Event) => {
        console.error('Model loading error:', e);
        if (mounted) {
          setError('Failed to load 3D model');
          setModelLoaded(true); // Show viewer anyway
        }
      };

      modelViewer.addEventListener('load', handleLoad);
      modelViewer.addEventListener('error', handleError);

      // Fallback: Force load after 3 seconds if event doesn't fire
      const timeout = setTimeout(() => {
        if (mounted) {
          console.log('⚠️ Force loading model after timeout');
          setModelLoaded(true);
        }
      }, 3000);

      return () => {
        mounted = false;
        clearTimeout(timeout);
        modelViewer.removeEventListener('load', handleLoad);
        modelViewer.removeEventListener('error', handleError);
      };
    };

    const cleanup = checkModel();
    return () => {
      mounted = false;
      if (cleanup) cleanup();
    };
  }, [modelViewerReady]);

  // Hide instructional overlay after 3 seconds when model is loaded
  useEffect(() => {
    if (modelLoaded) {
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [modelLoaded]);

  // Apply images to model textures - Force assignment to known screen materials
  useEffect(() => {
    if (!modelLoaded || !modelViewerReady) return;
    if (!leftImage && !backImage) return;

    const applyTextures = async () => {
      setApplyingTexture(true);

      try {
        const modelViewer = document.getElementById('campaign-truck') as any;
        if (!modelViewer) {
          console.warn('Model viewer element not found');
          return;
        }

        // Get the model and its materials
        if (!modelViewer.model?.materials) {
          console.warn('Model or materials not available yet');
          setSuccess('Upload complete - 3D preview updated');
          setTimeout(() => setSuccess(''), 3000);
          return;
        }

        const materials = modelViewer.model.materials;

        // Define known screen material names
        const sideScreenMaterials = [
          'Screen_Left',
          'Screen_Right',
          'LED_Screen_Side',
          'LED_Screen_Side.001'
        ];

        const backScreenMaterials = [
          'Screen_Back',
          'LED_Screen_Back'
        ];

        // Apply side screen texture
        if (leftImage) {
          try {
            const sideTexture = await modelViewer.createTexture(leftImage.url);

            materials.forEach((material: any) => {
              if (sideScreenMaterials.includes(material.name)) {
                // Apply to base color
                if (material.pbrMetallicRoughness?.baseColorTexture) {
                  material.pbrMetallicRoughness.baseColorTexture.setTexture(sideTexture);
                }
                // Apply to emissive if available
                if (material.emissiveTexture) {
                  material.emissiveTexture.setTexture(sideTexture);
                }
                console.log(`✓ Applied side texture to: ${material.name}`);
              }
            });

            modelViewer.requestRender();
          } catch (err) {
            console.error('Error applying side texture:', err);
          }
        }

        // Apply back screen texture
        if (backImage) {
          try {
            const backTexture = await modelViewer.createTexture(backImage.url);

            materials.forEach((material: any) => {
              if (backScreenMaterials.includes(material.name)) {
                // Apply to base color
                if (material.pbrMetallicRoughness?.baseColorTexture) {
                  material.pbrMetallicRoughness.baseColorTexture.setTexture(backTexture);
                }
                // Apply to emissive if available
                if (material.emissiveTexture) {
                  material.emissiveTexture.setTexture(backTexture);
                }
                console.log(`✓ Applied back texture to: ${material.name}`);
              }
            });

            modelViewer.requestRender();
          } catch (err) {
            console.error('Error applying back texture:', err);
          }
        }

        setSuccess('✓ Textures applied to truck screens');
        setTimeout(() => setSuccess(''), 3000);

      } catch (err) {
        console.error('Texture application error:', err);
        setError('Could not apply texture to model. Please try again.');
        setTimeout(() => setError(''), 4000);
      } finally {
        setTimeout(() => setApplyingTexture(false), 300);
      }
    };

    applyTextures();
  }, [leftImage, backImage, modelLoaded, modelViewerReady]);

  // Validate file
  const validateFile = async (file: File, type: 'left' | 'back'): Promise<{ error?: string; warning?: string; dimensions?: { width: number; height: number } }> => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      return { error: 'Please upload a PNG, JPG, or WEBP image.' };
    }

    if (file.size > 5 * 1024 * 1024) {
      return { error: 'File size must be under 5 MB.' };
    }

    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => {
        const dimensions = { width: img.width, height: img.height };
        let warning = '';

        if (type === 'left') {
          const aspectRatio = img.width / img.height;
          const targetRatio = 16 / 9;
          if (Math.abs(aspectRatio - targetRatio) > 0.1 || img.width < 1280) {
            warning = 'Recommended 1280×720 for side screens. Image may appear stretched or pixelated.';
          }
        } else {
          const aspectRatio = img.width / img.height;
          if (Math.abs(aspectRatio - 1) > 0.1 || img.width < 720) {
            warning = 'Recommended 720×720 for the rear screen. Image may appear stretched or pixelated.';
          }
        }

        resolve({ dimensions, warning });
        URL.revokeObjectURL(img.src);
      };
      img.onerror = () => {
        resolve({ error: 'Unable to load image. Please try a different file.' });
        URL.revokeObjectURL(img.src);
      };
      img.src = URL.createObjectURL(file);
    });
  };

  // Create thumbnail
  const createThumbnail = (file: File): Promise<string> => {
    return new Promise((resolve) => {
      const img = new Image();
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      img.onload = () => {
        canvas.width = 100;
        canvas.height = 100;
        if (ctx) {
          ctx.drawImage(img, 0, 0, 100, 100);
          resolve(canvas.toDataURL());
        }
        URL.revokeObjectURL(img.src);
      };

      img.src = URL.createObjectURL(file);
    });
  };

  // Handle file upload
  const handleFileUpload = async (files: FileList, type: 'left' | 'back') => {
    const file = files[0];
    if (!file) return;

    // Clear previous messages
    setError('');
    setSuccess('');
    setWarning('');

    const validation = await validateFile(file, type);

    if (validation.error) {
      setError(validation.error);
      setTimeout(() => setError(''), 4000);
      return;
    }

    if (validation.warning) {
      setWarning(validation.warning);
      setTimeout(() => setWarning(''), 6000);
    }

    const url = URL.createObjectURL(file);
    const thumbnail = await createThumbnail(file);

    const uploadedImage: UploadedImage = {
      file,
      url,
      thumbnail,
      dimensions: validation.dimensions
    };

    if (type === 'left') {
      if (leftImage) URL.revokeObjectURL(leftImage.url);
      setLeftImage(uploadedImage);
    } else {
      if (backImage) URL.revokeObjectURL(backImage.url);
      setBackImage(uploadedImage);
    }
  };

  // Clear image
  const clearImage = (type: 'left' | 'back') => {
    if (type === 'left') {
      if (leftImage) URL.revokeObjectURL(leftImage.url);
      setLeftImage(null);
    } else {
      if (backImage) URL.revokeObjectURL(backImage.url);
      setBackImage(null);
    }
    setWarning('');
  };

  // Reset camera view
  const resetView = () => {
    const truck = document.getElementById('campaign-truck') as HTMLElement & { cameraOrbit: string; cameraTarget: string };
    if (truck) {
      truck.cameraOrbit = '225deg 25deg 6m';
      truck.cameraTarget = 'auto auto auto';
    }
  };

  // Drag and drop handlers
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent, type: 'left' | 'back') => {
    e.preventDefault();
    setDragActive(false);

    const files = e.dataTransfer.files;
    if (files.length > 0) {
      handleFileUpload(files, type);
    }
  };

  return (
    <section id="preview" className="py-24 bg-black-hero">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Upload Controls */}
          <div className="order-2 lg:order-1">
            <div className="mb-10">
              <div className="inline-flex items-center gap-2 bg-gold-base/10 border border-gold-base/30 text-gold-highlight px-6 py-2 rounded-full font-bold text-sm mb-6 backdrop-blur-sm">
                <span className="w-2 h-2 bg-gold-highlight rounded-full animate-pulse"></span>
                Live 3D Preview
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-text-light mb-6">
                Preview Your <span className="text-gold-gradient">Campaign</span>
              </h2>
              <p className="text-lg md:text-xl text-text-mid leading-relaxed">
                Upload your creative and instantly see it on our 3D LED billboard truck model.
              </p>
            </div>

            {/* Success Message */}
            {success && (
              <div className="mb-6 p-4 bg-gold-base/10 border border-gold-base/30 rounded-xl flex items-center gap-3 animate-fade-in backdrop-blur-sm">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-gold-highlight" />
                <span className="font-medium text-gold-highlight">{success}</span>
              </div>
            )}

            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center gap-3 animate-fade-in backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 text-red-400" />
                <span className="font-medium text-red-400">{error}</span>
              </div>
            )}

            {/* Warning Message */}
            {warning && (
              <div className="mb-6 p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl flex items-center gap-3 animate-fade-in backdrop-blur-sm">
                <AlertTriangle className="h-5 w-5 flex-shrink-0 text-orange-400" />
                <span className="text-sm text-orange-400">{warning}</span>
              </div>
            )}

            {/* Upload Controls */}
            <div className="space-y-6">
              {/* Upload Left Screen */}
              <Card className={`border transition-all duration-300 ${dragActive ? 'border-gold-base bg-gold-base/5 shadow-gold-glow' : 'border-gold-base/20 hover:border-gold-base/50'} bg-black-card backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <div
                    className="border-2 border-dashed border-gold-base/30 rounded-xl p-8 text-center transition-all duration-300 hover:border-gold-base hover:bg-gold-base/5 cursor-pointer group"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, 'left')}
                    onClick={() => document.getElementById('upload-left')?.click()}
                  >
                    <Upload className="h-10 w-10 text-gold-base/50 group-hover:text-gold-highlight mx-auto mb-4 transition-colors" />
                    <p className="text-sm font-semibold text-text-light mb-2">Side Screens (1280×720)</p>
                    <p className="text-xs text-text-mid mb-6">16:9 aspect ratio, appears on both sides</p>
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'left')}
                      className="hidden"
                      id="upload-left"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById('upload-left')?.click();
                      }}
                      className="px-6 py-2 bg-gold-gradient text-black-hero rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                      Choose File
                    </button>
                  </div>
                  {leftImage && (
                    <div className="mt-6 flex items-center gap-4 p-3 bg-black-hero/30 rounded-lg border border-gold-base/20 animate-fade-in">
                      <img src={leftImage.thumbnail} alt="Left screen preview" className="w-14 h-14 rounded-lg object-cover border border-gold-base/30" />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium text-text-light block truncate">{leftImage.file.name}</span>
                        {leftImage.dimensions && (
                          <span className="text-xs text-text-mid">{leftImage.dimensions.width}×{leftImage.dimensions.height}px</span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => clearImage('left')}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-colors flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Upload Back Screen */}
              <Card className={`border transition-all duration-300 ${dragActive ? 'border-gold-base bg-gold-base/5 shadow-gold-glow' : 'border-gold-base/20 hover:border-gold-base/50'} bg-black-card backdrop-blur-sm`}>
                <CardContent className="p-6">
                  <div
                    className="border-2 border-dashed border-gold-base/30 rounded-xl p-8 text-center transition-all duration-300 hover:border-gold-base hover:bg-gold-base/5 cursor-pointer group"
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={(e) => handleDrop(e, 'back')}
                    onClick={() => document.getElementById('upload-back')?.click()}
                  >
                    <Upload className="h-10 w-10 text-gold-base/50 group-hover:text-gold-highlight mx-auto mb-4 transition-colors" />
                    <p className="text-sm font-semibold text-text-light mb-2">Back Screen (720×720)</p>
                    <p className="text-xs text-text-mid mb-6">1:1 aspect ratio, square format</p>
                    <input
                      type="file"
                      accept="image/jpeg,image/jpg,image/png,image/webp"
                      onChange={(e) => e.target.files && handleFileUpload(e.target.files, 'back')}
                      className="hidden"
                      id="upload-back"
                    />
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        document.getElementById('upload-back')?.click();
                      }}
                      className="px-6 py-2 bg-gold-gradient text-black-hero rounded-lg font-semibold hover:scale-105 transition-transform"
                    >
                      Choose File
                    </button>
                  </div>
                  {backImage && (
                    <div className="mt-6 flex items-center gap-4 p-3 bg-black-hero/30 rounded-lg border border-gold-base/20 animate-fade-in">
                      <img src={backImage.thumbnail} alt="Back screen preview" className="w-14 h-14 rounded-lg object-cover border border-gold-base/30" />
                      <div className="flex-1 min-w-0">
                        <span className="text-sm font-medium text-text-light block truncate">{backImage.file.name}</span>
                        {backImage.dimensions && (
                          <span className="text-xs text-text-mid">{backImage.dimensions.width}×{backImage.dimensions.height}px</span>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => clearImage('back')}
                        className="text-red-400 hover:text-red-300 hover:bg-red-500/10 p-2 rounded-lg transition-colors flex-shrink-0"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>

            {/* Image Requirements */}
            <div className="mt-8 p-6 bg-gold-base/5 border border-gold-base/20 rounded-xl backdrop-blur-sm">
              <p className="text-sm text-gold-highlight font-semibold mb-3">Image Requirements:</p>
              <ul className="text-xs text-text-mid space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-gold-base mt-0.5">•</span>
                  <span><strong className="text-text-light">Formats:</strong> PNG, JPG, WEBP • Max 5 MB</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-base mt-0.5">•</span>
                  <span><strong className="text-text-light">Recommended:</strong> 1280×720 for sides, 720×720 for back</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gold-base mt-0.5">•</span>
                  <span><strong className="text-text-light">Quality:</strong> Higher resolution = sharper display</span>
                </li>
              </ul>
              <p className="text-xs text-text-mid/60 italic mt-4">
                * Previews are illustrative. Final on-road brightness and color may vary.
              </p>
            </div>
          </div>

          {/* Right Column - 3D Model Viewer */}
          <div className="order-1 lg:order-2">
            <div className="relative w-full bg-black-card/30 border border-gold-base/20 rounded-2xl overflow-hidden backdrop-blur-sm" style={{ height: '600px' }}>
              {/* Loading Message */}
              {!modelLoaded && modelViewerReady && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black-panel/80 backdrop-blur-md">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gold-base/20 border-t-gold-highlight mb-4"></div>
                    <p className="text-sm text-gold-highlight font-semibold">Loading 3D truck model…</p>
                  </div>
                </div>
              )}

              {!modelViewerReady && (
                <div className="absolute inset-0 flex items-center justify-center z-10 bg-black-panel/80 backdrop-blur-md">
                  <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-10 w-10 border-4 border-gold-base/20 border-t-gold-highlight mb-4"></div>
                    <p className="text-sm text-gold-highlight font-semibold">Initializing 3D viewer…</p>
                  </div>
                </div>
              )}

              {/* Applying Texture Overlay */}
              {applyingTexture && (
                <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none">
                  <div className="bg-black-card/95 border border-gold-base/30 text-gold-highlight px-6 py-3 rounded-xl shadow-gold-glow backdrop-blur-sm animate-fade-in">
                    <p className="text-sm font-semibold">Applying texture...</p>
                  </div>
                </div>
              )}

              {modelViewerReady && (
                <model-viewer
                  id="campaign-truck"
                  src="https://cdn.jsdelivr.net/gh/Brightpath25/brightpath-3d-assets@main/Brightpath_LED_Truck_WebReady.glb"
                  camera-controls
                  disable-zoom
                  auto-rotate={autoRotate}
                  shadow-intensity="0.5"
                  exposure="0.9"
                  tone-mapping="aces"
                  environment-image="neutral"
                  ar
                  ar-modes="webxr scene-viewer quick-look"
                  style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'transparent',
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.6))'
                  }}
                  field-of-view="35deg"
                  min-camera-orbit="auto 10deg auto"
                  max-camera-orbit="auto 85deg auto"
                  camera-orbit="225deg 25deg 6m"
                  interaction-prompt="none"
                  className="transition-opacity duration-500"
                />
              )}

              {/* Instructional Overlay */}
              {modelLoaded && showOverlay && (
                <div
                  className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-30 pointer-events-none"
                  style={{
                    animation: 'luxuryFadeIn 1s ease-in-out, fadeOut 1s ease-in-out 2s forwards'
                  }}
                >
                  <div className="bg-black-card/90 backdrop-blur-md border border-gold-base/30 px-6 py-3 rounded-full">
                    <p className="text-xs md:text-sm text-gold-highlight font-medium whitespace-nowrap">
                      Drag to rotate · Scroll to zoom · Upload to preview
                    </p>
                  </div>
                </div>
              )}

              {/* 3D Controls */}
              <div className="absolute left-1/2 transform -translate-x-1/2 bottom-4 flex flex-wrap justify-center gap-2 md:gap-3 px-2">
                <button
                  onClick={resetView}
                  className="flex items-center gap-2 px-3 md:px-4 py-2 bg-black-card/90 backdrop-blur-md hover:bg-black-card border-none rounded-lg shadow-lg transition-all duration-[250ms] ease-in-out text-text-light text-xs md:text-sm font-medium hover:scale-105"
                >
                  <RotateCcw className="h-4 w-4 text-gold-base" />
                  <span className="hidden sm:inline">Reset View</span>
                  <span className="sm:hidden">Reset</span>
                </button>
                <label className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-black-card/90 backdrop-blur-md hover:bg-black-card border-none rounded-lg shadow-lg cursor-pointer transition-all duration-[250ms] ease-in-out text-text-light text-xs md:text-sm font-medium hover:scale-105">
                  <input
                    type="checkbox"
                    checked={autoRotate}
                    onChange={(e) => setAutoRotate(e.target.checked)}
                    className="w-4 h-4 text-gold-base border-gold-base/30 rounded focus:ring-gold-base accent-gold-base"
                  />
                  Auto-rotate
                </label>
              </div>
            </div>

            <div className="mt-6 p-4 md:p-5 bg-gold-gradient rounded-xl text-black-hero text-center mx-auto max-w-full">
              <p className="text-xs md:text-sm font-semibold leading-relaxed">
                <strong>Interactive 3D Model</strong>
                <span className="hidden sm:inline"> • Drag to rotate • Camera controls enabled</span>
                <span className="sm:hidden block mt-1">Drag to rotate</span>
              </p>
            </div>

            <p className="text-center text-xs md:text-sm text-text-mid mt-4 md:mt-6 px-4">
              Preview of LED billboard truck with your creative on side and back screens
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaign360Viewer;
