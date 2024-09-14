import { Universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const universe = Universe.new();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();

    requestAnimationFrame(renderLoop);
};

let state = 0;
pre.textContent = universe.render();
pre.addEventListener('click', function() {
    if (state === 0) {
        state = 1;
        requestAnimationFrame(renderLoop);
    }
});
