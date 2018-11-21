export default {
	'/api': {
		target: 'http://test.server.com',
		changeOrigin: true,
		pathRewrite: {
			'^/api': 'api'
		}
	}
}