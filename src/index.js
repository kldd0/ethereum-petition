var app = new Vue({
	el: '#app',
	data: {
		message: 'EtherApp'
	},
	methods: {
		connectToMetaMask: async function () {
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
	el: '#signatures',
	data: {
		status: ''
	},
	methods: {
		createSignature: function () {
			var content = document.getElementById('content-id').value;
			if (content !== '') {
				this.status = 'Signature is created. Author is ' + content;
			} else {
				this.status = 'Input is blank';
			}
		}
	}
})