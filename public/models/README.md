# 3D Models (Phase 1)

**Option A (recommended when asset available):** Place `avatar-base.glb` here (base female GLTF). In `Avatar.tsx`, use Drei’s `useGLTF('/models/avatar-base.glb')` to load it, apply custom skin material and attach Outfit, Hair, and MakeupDecals. The app currently uses a placeholder body (Option B) until this file exists.

**Asset sourcing (reference):** Mixamo (rigged, export as GLTF), Sketchfab (CC or purchasable), or Ready Player Me–style GLTF. For Phase 1 a high-quality static or single-pose standing model is enough.

**Optional:** `hair.glb` for a separate hair model (otherwise hair is built from meshes in `Hair.tsx`).
