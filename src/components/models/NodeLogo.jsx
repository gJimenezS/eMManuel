/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 node.glb -T 
Files: node.glb [7.27MB] > /Users/hsuwinlatt/Desktop/Work/jsm pj/three-d-portfolio-2025/public/models/node-transformed.glb [729.19KB] (90%)
*/

import React from "react";
import { useGLTF } from "@react-three/drei";

export function NodeLogo(props) {
  const { nodes, materials } = useGLTF("/models/node-transformed.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        scale={5}
        geometry={
          nodes["tripo_node_a2ae1f0a-576e-4d11-a22b-f4f90dd99b4b"].geometry
        }
        material={
          materials["tripo_material_a2ae1f0a-576e-4d11-a22b-f4f90dd99b4b"]
        }
      />
    </group>
  );
}

useGLTF.preload("/models/node-transformed.glb");
