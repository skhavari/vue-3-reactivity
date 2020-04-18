import { ref, watchEffect } from 'vue';

let inputEl = document.querySelector('input');
let countEl = document.querySelector('#count');
let textEl = document.querySelector('#echo');

const emptyText = '🍩';

let count = ref(0);
let text = ref(emptyText);

let onCountUpdated = () => {
    countEl.textContent = count.value;
};

let onTextUpdated = () => {
    textEl.textContent = text.value;
};

watchEffect(onCountUpdated);
watchEffect(onTextUpdated);

inputEl.addEventListener('keydown', () => count.value++);
inputEl.addEventListener('keyup', () => {
    let val = emptyText;
    if (inputEl.value.length !== 0) {
        val = inputEl.value;
    }
    text.value = val;
});
