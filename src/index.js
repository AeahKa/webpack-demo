import x from './x.js';
import png from './1.png';

const div = document.querySelector('#app');
console.log(div);
div.innerHTML = `<img src='${png}'>`;

const button = document.createElement('button');
button.innerText = '懒加载';
button.onclick = () => {
	const promise = import('./lazy');
	promise.then(
		(module) => {
			const fn = module.default;
			fn();
		},
		() => {
			console.log('failed');
		}
	);
};

div.appendChild(button);
