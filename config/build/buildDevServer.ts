import { type BuildOptions } from './types/config';
import type { Configuration as DevServerConfiguration } from 'webpack-dev-server';

const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
	return {
		port: options.port,
		open: true,
		historyApiFallback: true,
		hot: true
	};
};

export default buildDevServer;
