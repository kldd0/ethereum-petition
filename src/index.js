var app = new Vue({
	el: '#app',
	data: {
		message: 'EtherApp'
	},
	methods: {
		connectToMetaMask: async function main() {
			if (typeof window.ethereum !== 'undefined') {
				console.log('MetaMask is installed')
			}

			const accs = await ethereum.request({ method: 'eth_requestAccounts'});
			this.message = 'your account address: ' + accs[0];
			// const balance = await ethereum.request({ method: 'eth_balance'})
		}
	}
})

var appTasks = new Vue({
	el: '#signs',
	methods: {
		createSign: function () {
			var content = document.getElementById('content-id').value;
			if (content !== '') {
				console.log('Sign is created. Author is ', content);
			} else {
				console.log('Input is blank');
			}
		}
	}
})