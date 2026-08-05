# BrightPath truck 360 viewer protection

Status: protected known-good subsystem

Known-good recovery ref: viewer-known-good-2026-08-05
Known-good commit: 911c69d050870c042491918e35f0cc97f410cfdd

## Protected behavior

The viewer must continue to provide:

- A visible static truck base layer when WebGL or model initialization is unavailable.
- The original GLB model when the browser supports the interactive viewer.
- Side artwork upload and mapping to the side screen materials.
- Rear artwork upload and mapping to the rear screen materials.
- Rotation controls when interactive 3D is available.
- A cleared loading state; it must not remain indefinitely on a loading message.

## Protected implementation contract

Do not change the following without an isolated viewer PR and explicit owner review:

- src/components/Campaign360Viewer.tsx
- The GLB URL and model asset.
- The fallback image path.
- Screen material names and upload element IDs.
- The fallback state and immediate static base layer.
- The model-viewer loading and error handling boundary.

## Required validation before merge

1. Run the automated Truck viewer protection workflow.
2. Confirm the viewer appears with WebGL unavailable.
3. Confirm side and rear uploads still display on the correct screens.
4. Confirm rotation works when 3D is available.
5. Confirm no permanent loading overlay.
6. Confirm the PR changes only the intended protected files when viewer behavior is being changed.
7. Confirm the public site is serving the merged main commit before closing the work.

The broad redesign PR must not be used as a vehicle for viewer recovery. Viewer recovery stays isolated from unrelated redesign work.
