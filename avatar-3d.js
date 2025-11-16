// 3D Avatar System using Three.js
// Roblox-style 3D character builder

let scene, camera, renderer, avatar;
let avatarParts = {
    head: null,
    body: null,
    leftArm: null,
    rightArm: null,
    leftLeg: null,
    rightLeg: null
};

// Avatar customization options with shop system
const avatarShop = {
    skinColors: [
        { id: 'light', color: 0xffd4a3, name: 'Light', price: 0, unlocked: true },
        { id: 'medium', color: 0xd4a574, name: 'Medium', price: 0, unlocked: true },
        { id: 'tan', color: 0xc68642, name: 'Tan', price: 0, unlocked: true },
        { id: 'brown', color: 0x8d5524, name: 'Brown', price: 0, unlocked: true },
        { id: 'dark', color: 0x5c3317, name: 'Dark', price: 0, unlocked: true }
    ],
    hairStyles: [
        { id: 'none', style: null, name: 'None', price: 0, unlocked: true },
        { id: 'short', style: 'short', name: 'Short', price: 0, unlocked: true },
        { id: 'long', style: 'long', name: 'Long', price: 50, unlocked: false },
        { id: 'curly', style: 'curly', name: 'Curly', price: 75, unlocked: false },
        { id: 'spiky', style: 'spiky', name: 'Spiky', price: 100, unlocked: false },
        { id: 'mohawk', style: 'mohawk', name: 'Mohawk', price: 150, unlocked: false },
        { id: 'ponytail', style: 'ponytail', name: 'Ponytail', price: 100, unlocked: false },
        { id: 'bun', style: 'bun', name: 'Bun', price: 75, unlocked: false }
    ],
    hairColors: [
        { id: 'brown', color: 0x4a2511, name: 'Brown', price: 0, unlocked: true },
        { id: 'black', color: 0x1a1a1a, name: 'Black', price: 0, unlocked: true },
        { id: 'blonde', color: 0xffd700, name: 'Blonde', price: 25, unlocked: false },
        { id: 'red', color: 0xff4500, name: 'Red', price: 50, unlocked: false },
        { id: 'blue', color: 0x0066ff, name: 'Blue', price: 75, unlocked: false },
        { id: 'pink', color: 0xff69b4, name: 'Pink', price: 75, unlocked: false },
        { id: 'green', color: 0x00ff00, name: 'Green', price: 100, unlocked: false },
        { id: 'purple', color: 0x9900ff, name: 'Purple', price: 100, unlocked: false },
        { id: 'white', color: 0xffffff, name: 'White', price: 50, unlocked: false }
    ],
    topColors: [
        { id: 'blue', color: 0x0066ff, name: 'Blue', price: 0, unlocked: true },
        { id: 'red', color: 0xff0000, name: 'Red', price: 0, unlocked: true },
        { id: 'green', color: 0x00ff00, name: 'Green', price: 25, unlocked: false },
        { id: 'yellow', color: 0xffff00, name: 'Yellow', price: 25, unlocked: false },
        { id: 'purple', color: 0x9900ff, name: 'Purple', price: 50, unlocked: false },
        { id: 'black', color: 0x1a1a1a, name: 'Black', price: 0, unlocked: true },
        { id: 'white', color: 0xffffff, name: 'White', price: 0, unlocked: true },
        { id: 'orange', color: 0xff8800, name: 'Orange', price: 50, unlocked: false },
        { id: 'cyan', color: 0x00ffff, name: 'Cyan', price: 75, unlocked: false },
        { id: 'gold', color: 0xffd700, name: 'Gold', price: 150, unlocked: false }
    ],
    bottomColors: [
        { id: 'black', color: 0x1a1a1a, name: 'Black', price: 0, unlocked: true },
        { id: 'blue', color: 0x0066ff, name: 'Blue', price: 0, unlocked: true },
        { id: 'red', color: 0xff0000, name: 'Red', price: 25, unlocked: false },
        { id: 'green', color: 0x00ff00, name: 'Green', price: 25, unlocked: false },
        { id: 'yellow', color: 0xffff00, name: 'Yellow', price: 25, unlocked: false },
        { id: 'purple', color: 0x9900ff, name: 'Purple', price: 50, unlocked: false },
        { id: 'white', color: 0xffffff, name: 'White', price: 0, unlocked: true },
        { id: 'brown', color: 0x8b4513, name: 'Brown', price: 50, unlocked: false },
        { id: 'gray', color: 0x808080, name: 'Gray', price: 50, unlocked: false }
    ],
    accessories: [
        { id: 'none', type: null, name: 'None', price: 0, unlocked: true },
        { id: 'glasses', type: 'glasses', name: 'Glasses', price: 50, unlocked: false },
        { id: 'hat', type: 'hat', name: 'Hat', price: 100, unlocked: false },
        { id: 'crown', type: 'crown', name: 'Crown', price: 500, unlocked: false },
        { id: 'headphones', type: 'headphones', name: 'Headphones', price: 150, unlocked: false },
        { id: 'cap', type: 'cap', name: 'Cap', price: 75, unlocked: false },
        { id: 'bandana', type: 'bandana', name: 'Bandana', price: 100, unlocked: false },
        { id: 'visor', type: 'visor', name: 'Visor', price: 125, unlocked: false }
    ]
};

// Legacy compatibility
const avatarOptions = {
    skinColors: {
        light: 0xffd4a3,
        medium: 0xd4a574,
        tan: 0xc68642,
        brown: 0x8d5524,
        dark: 0x5c3317
    },
    hairStyles: {
        none: null,
        short: 'short',
        long: 'long',
        curly: 'curly',
        spiky: 'spiky',
        mohawk: 'mohawk',
        ponytail: 'ponytail',
        bun: 'bun'
    },
    hairColors: {
        black: 0x1a1a1a,
        brown: 0x4a2511,
        blonde: 0xffd700,
        red: 0xff4500,
        blue: 0x0066ff,
        pink: 0xff69b4,
        green: 0x00ff00,
        purple: 0x9900ff,
        white: 0xffffff
    },
    outfitColors: {
        red: 0xff0000,
        blue: 0x0066ff,
        green: 0x00ff00,
        yellow: 0xffff00,
        purple: 0x9900ff,
        black: 0x1a1a1a,
        white: 0xffffff,
        orange: 0xff8800,
        cyan: 0x00ffff,
        gold: 0xffd700,
        brown: 0x8b4513,
        gray: 0x808080
    },
    accessories: {
        none: null,
        glasses: 'glasses',
        hat: 'hat',
        crown: 'crown',
        headphones: 'headphones',
        cap: 'cap',
        bandana: 'bandana',
        visor: 'visor'
    }
};

// Current avatar configuration
let currentConfig = {
    skinColor: 0xffd4a3,
    hairStyle: 'short',
    hairColor: 0x4a2511,
    topColor: 0x0066ff,
    bottomColor: 0x1a1a1a,
    accessory: null
};

// Initialize 3D Avatar System
function init3DAvatar(containerId) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('Container not found:', containerId);
        return;
    }

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a1a2e);

    // Camera setup
    camera = new THREE.PerspectiveCamera(
        45,
        container.clientWidth / container.clientHeight,
        0.1,
        1000
    );
    camera.position.set(0, 1.5, 5);
    camera.lookAt(0, 1, 0);

    // Renderer setup
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.shadowMap.enabled = true;
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 10, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    const fillLight = new THREE.DirectionalLight(0x4a90e2, 0.3);
    fillLight.position.set(-5, 5, -5);
    scene.add(fillLight);

    // Create avatar
    createAvatar();

    // Animation loop
    animate();

    // Handle window resize
    window.addEventListener('resize', () => {
        if (container.clientWidth > 0) {
            camera.aspect = container.clientWidth / container.clientHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(container.clientWidth, container.clientHeight);
        }
    });

    // Mouse controls for rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    container.addEventListener('mousedown', (e) => {
        isDragging = true;
        previousMousePosition = { x: e.clientX, y: e.clientY };
    });

    container.addEventListener('mousemove', (e) => {
        if (isDragging && avatar) {
            const deltaX = e.clientX - previousMousePosition.x;
            avatar.rotation.y += deltaX * 0.01;
            previousMousePosition = { x: e.clientX, y: e.clientY };
        }
    });

    container.addEventListener('mouseup', () => {
        isDragging = false;
    });

    container.addEventListener('mouseleave', () => {
        isDragging = false;
    });
}

// Create Roblox-style blocky avatar
function createAvatar() {
    if (avatar) {
        scene.remove(avatar);
    }

    avatar = new THREE.Group();

    // Head (cube)
    const headGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const headMaterial = new THREE.MeshPhongMaterial({ 
        color: currentConfig.skinColor,
        flatShading: true 
    });
    avatarParts.head = new THREE.Mesh(headGeometry, headMaterial);
    avatarParts.head.position.y = 1.8;
    avatarParts.head.castShadow = true;
    avatar.add(avatarParts.head);

    // Add face
    addFace(avatarParts.head);

    // Hair
    if (currentConfig.hairStyle && currentConfig.hairStyle !== 'none') {
        const hair = createHair(currentConfig.hairStyle, currentConfig.hairColor);
        avatarParts.head.add(hair);
    }

    // Accessory
    if (currentConfig.accessory) {
        const accessory = createAccessory(currentConfig.accessory);
        if (accessory) avatarParts.head.add(accessory);
    }

    // Body (torso)
    const bodyGeometry = new THREE.BoxGeometry(1, 1.2, 0.6);
    const bodyMaterial = new THREE.MeshPhongMaterial({ 
        color: currentConfig.topColor,
        flatShading: true 
    });
    avatarParts.body = new THREE.Mesh(bodyGeometry, bodyMaterial);
    avatarParts.body.position.y = 0.9;
    avatarParts.body.castShadow = true;
    avatar.add(avatarParts.body);

    // Arms
    const armGeometry = new THREE.BoxGeometry(0.3, 1, 0.3);
    const armMaterial = new THREE.MeshPhongMaterial({ 
        color: currentConfig.skinColor,
        flatShading: true 
    });

    // Left arm
    avatarParts.leftArm = new THREE.Mesh(armGeometry, armMaterial);
    avatarParts.leftArm.position.set(-0.65, 0.9, 0);
    avatarParts.leftArm.castShadow = true;
    avatar.add(avatarParts.leftArm);

    // Right arm
    avatarParts.rightArm = new THREE.Mesh(armGeometry, armMaterial);
    avatarParts.rightArm.position.set(0.65, 0.9, 0);
    avatarParts.rightArm.castShadow = true;
    avatar.add(avatarParts.rightArm);

    // Legs
    const legGeometry = new THREE.BoxGeometry(0.4, 1, 0.4);
    const legMaterial = new THREE.MeshPhongMaterial({ 
        color: currentConfig.bottomColor,
        flatShading: true 
    });

    // Left leg
    avatarParts.leftLeg = new THREE.Mesh(legGeometry, legMaterial);
    avatarParts.leftLeg.position.set(-0.25, -0.2, 0);
    avatarParts.leftLeg.castShadow = true;
    avatar.add(avatarParts.leftLeg);

    // Right leg
    avatarParts.rightLeg = new THREE.Mesh(legGeometry, legMaterial);
    avatarParts.rightLeg.position.set(0.25, -0.2, 0);
    avatarParts.rightLeg.castShadow = true;
    avatar.add(avatarParts.rightLeg);

    scene.add(avatar);
}

// Add simple face to head
function addFace(head) {
    // Eyes
    const eyeGeometry = new THREE.BoxGeometry(0.15, 0.15, 0.05);
    const eyeMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });

    const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    leftEye.position.set(-0.2, 0.1, 0.4);
    head.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
    rightEye.position.set(0.2, 0.1, 0.4);
    head.add(rightEye);

    // Smile
    const smileGeometry = new THREE.BoxGeometry(0.4, 0.05, 0.05);
    const smileMaterial = new THREE.MeshPhongMaterial({ color: 0x000000 });
    const smile = new THREE.Mesh(smileGeometry, smileMaterial);
    smile.position.set(0, -0.15, 0.4);
    head.add(smile);
}

// Create hair based on style
function createHair(style, color) {
    const hairGroup = new THREE.Group();
    const hairMaterial = new THREE.MeshPhongMaterial({ 
        color: color,
        flatShading: true 
    });

    switch(style) {
        case 'short':
            const shortHair = new THREE.Mesh(
                new THREE.BoxGeometry(0.85, 0.3, 0.85),
                hairMaterial
            );
            shortHair.position.y = 0.5;
            hairGroup.add(shortHair);
            break;

        case 'long':
            const longHair = new THREE.Mesh(
                new THREE.BoxGeometry(0.85, 0.4, 0.85),
                hairMaterial
            );
            longHair.position.y = 0.5;
            hairGroup.add(longHair);
            
            const longBack = new THREE.Mesh(
                new THREE.BoxGeometry(0.6, 0.8, 0.2),
                hairMaterial
            );
            longBack.position.set(0, -0.1, -0.4);
            hairGroup.add(longBack);
            break;

        case 'curly':
            for (let i = 0; i < 8; i++) {
                const curl = new THREE.Mesh(
                    new THREE.SphereGeometry(0.15, 8, 8),
                    hairMaterial
                );
                const angle = (i / 8) * Math.PI * 2;
                curl.position.set(
                    Math.cos(angle) * 0.4,
                    0.5,
                    Math.sin(angle) * 0.4
                );
                hairGroup.add(curl);
            }
            break;

        case 'spiky':
            for (let i = 0; i < 6; i++) {
                const spike = new THREE.Mesh(
                    new THREE.ConeGeometry(0.1, 0.4, 4),
                    hairMaterial
                );
                const angle = (i / 6) * Math.PI * 2;
                spike.position.set(
                    Math.cos(angle) * 0.3,
                    0.6,
                    Math.sin(angle) * 0.3
                );
                spike.rotation.z = Math.PI;
                hairGroup.add(spike);
            }
            break;

        case 'mohawk':
            for (let i = 0; i < 5; i++) {
                const spike = new THREE.Mesh(
                    new THREE.BoxGeometry(0.15, 0.5, 0.1),
                    hairMaterial
                );
                spike.position.set(0, 0.6, -0.3 + (i * 0.15));
                hairGroup.add(spike);
            }
            break;

        case 'ponytail':
            const ponytailBase = new THREE.Mesh(
                new THREE.BoxGeometry(0.6, 0.3, 0.6),
                hairMaterial
            );
            ponytailBase.position.y = 0.5;
            hairGroup.add(ponytailBase);
            
            const ponytail = new THREE.Mesh(
                new THREE.CylinderGeometry(0.15, 0.1, 0.8, 8),
                hairMaterial
            );
            ponytail.position.set(0, -0.2, -0.5);
            ponytail.rotation.x = Math.PI / 6;
            hairGroup.add(ponytail);
            break;

        case 'bun':
            const bunBase = new THREE.Mesh(
                new THREE.BoxGeometry(0.7, 0.2, 0.7),
                hairMaterial
            );
            bunBase.position.y = 0.5;
            hairGroup.add(bunBase);
            
            const bun = new THREE.Mesh(
                new THREE.SphereGeometry(0.25, 12, 12),
                hairMaterial
            );
            bun.position.set(0, 0.7, -0.2);
            hairGroup.add(bun);
            break;
    }

    return hairGroup;
}

// Create accessories
function createAccessory(type) {
    const accessoryGroup = new THREE.Group();

    switch(type) {
        case 'glasses':
            const glassesMaterial = new THREE.MeshPhongMaterial({ 
                color: 0x000000,
                transparent: true,
                opacity: 0.8
            });
            
            const leftLens = new THREE.Mesh(
                new THREE.TorusGeometry(0.12, 0.02, 8, 16),
                glassesMaterial
            );
            leftLens.position.set(-0.2, 0.1, 0.42);
            leftLens.rotation.y = Math.PI / 2;
            accessoryGroup.add(leftLens);

            const rightLens = new THREE.Mesh(
                new THREE.TorusGeometry(0.12, 0.02, 8, 16),
                glassesMaterial
            );
            rightLens.position.set(0.2, 0.1, 0.42);
            rightLens.rotation.y = Math.PI / 2;
            accessoryGroup.add(rightLens);

            const bridge = new THREE.Mesh(
                new THREE.BoxGeometry(0.1, 0.02, 0.02),
                glassesMaterial
            );
            bridge.position.set(0, 0.1, 0.42);
            accessoryGroup.add(bridge);
            break;

        case 'hat':
            const hatMaterial = new THREE.MeshPhongMaterial({ color: 0x8b4513 });
            const hatBrim = new THREE.Mesh(
                new THREE.CylinderGeometry(0.6, 0.6, 0.1, 16),
                hatMaterial
            );
            hatBrim.position.y = 0.5;
            accessoryGroup.add(hatBrim);

            const hatTop = new THREE.Mesh(
                new THREE.CylinderGeometry(0.4, 0.4, 0.4, 16),
                hatMaterial
            );
            hatTop.position.y = 0.75;
            accessoryGroup.add(hatTop);
            break;

        case 'crown':
            const crownMaterial = new THREE.MeshPhongMaterial({ 
                color: 0xffd700,
                emissive: 0xffaa00,
                emissiveIntensity: 0.3
            });
            const crownBase = new THREE.Mesh(
                new THREE.CylinderGeometry(0.45, 0.45, 0.2, 8),
                crownMaterial
            );
            crownBase.position.y = 0.5;
            accessoryGroup.add(crownBase);

            for (let i = 0; i < 8; i++) {
                const spike = new THREE.Mesh(
                    new THREE.ConeGeometry(0.08, 0.3, 4),
                    crownMaterial
                );
                const angle = (i / 8) * Math.PI * 2;
                spike.position.set(
                    Math.cos(angle) * 0.45,
                    0.75,
                    Math.sin(angle) * 0.45
                );
                accessoryGroup.add(spike);
            }
            break;

        case 'headphones':
            const headphoneMaterial = new THREE.MeshPhongMaterial({ color: 0x333333 });
            
            const leftEarpiece = new THREE.Mesh(
                new THREE.BoxGeometry(0.15, 0.2, 0.1),
                headphoneMaterial
            );
            leftEarpiece.position.set(-0.5, 0.1, 0);
            accessoryGroup.add(leftEarpiece);

            const rightEarpiece = new THREE.Mesh(
                new THREE.BoxGeometry(0.15, 0.2, 0.1),
                headphoneMaterial
            );
            rightEarpiece.position.set(0.5, 0.1, 0);
            accessoryGroup.add(rightEarpiece);

            const band = new THREE.Mesh(
                new THREE.TorusGeometry(0.5, 0.03, 8, 16, Math.PI),
                headphoneMaterial
            );
            band.rotation.z = Math.PI;
            band.position.y = 0.5;
            accessoryGroup.add(band);
            break;

        case 'cap':
            const capMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
            const capTop = new THREE.Mesh(
                new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16),
                capMaterial
            );
            capTop.position.y = 0.6;
            accessoryGroup.add(capTop);

            const capBrim = new THREE.Mesh(
                new THREE.BoxGeometry(0.6, 0.05, 0.4),
                capMaterial
            );
            capBrim.position.set(0, 0.45, 0.3);
            accessoryGroup.add(capBrim);
            break;

        case 'bandana':
            const bandanaMaterial = new THREE.MeshPhongMaterial({ color: 0xff0000 });
            const bandana = new THREE.Mesh(
                new THREE.BoxGeometry(0.9, 0.15, 0.9),
                bandanaMaterial
            );
            bandana.position.y = 0.45;
            accessoryGroup.add(bandana);

            const bandanaKnot = new THREE.Mesh(
                new THREE.BoxGeometry(0.2, 0.2, 0.15),
                bandanaMaterial
            );
            bandanaKnot.position.set(0, 0.45, -0.5);
            accessoryGroup.add(bandanaKnot);
            break;

        case 'visor':
            const visorMaterial = new THREE.MeshPhongMaterial({ 
                color: 0x00ffff,
                transparent: true,
                opacity: 0.7
            });
            const visor = new THREE.Mesh(
                new THREE.BoxGeometry(0.7, 0.3, 0.05),
                visorMaterial
            );
            visor.position.set(0, 0.15, 0.45);
            accessoryGroup.add(visor);

            const visorFrame = new THREE.Mesh(
                new THREE.BoxGeometry(0.75, 0.35, 0.05),
                new THREE.MeshPhongMaterial({ color: 0x333333 })
            );
            visorFrame.position.set(0, 0.15, 0.44);
            accessoryGroup.add(visorFrame);
            break;
    }

    return accessoryGroup;
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    
    // Gentle idle animation
    if (avatar) {
        avatar.rotation.y += 0.002;
        
        // Breathing effect
        const breathe = Math.sin(Date.now() * 0.001) * 0.02;
        if (avatarParts.body) {
            avatarParts.body.scale.y = 1 + breathe;
        }
    }
    
    renderer.render(scene, camera);
}

// Update avatar part
function updateAvatarPart(part, value) {
    currentConfig[part] = value;
    createAvatar();
}

// Export functions
window.init3DAvatar = init3DAvatar;
window.updateAvatarPart = updateAvatarPart;
window.avatarOptions = avatarOptions;
window.currentConfig = currentConfig;
