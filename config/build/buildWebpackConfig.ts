import type webpack from 'webpack';
import buildLoaders from './buildLoaders';
import buildPlugins from './buildPlugins';
import buildResolvers from './buildResolvers';
import { type BuildOptions } from './types/config';
import buildDevServer from './buildDevServer';

const buildWebpackConfig = (options: BuildOptions): webpack.Configuration => {
	const { mode, paths, isDev } = options;

	return {
		mode,
		entry: paths.entry,
		module: {
			rules: buildLoaders(options)
		},
		resolve: buildResolvers(options),
		output: {
			filename: '[name].[contenthash].js',
			path: paths.build,
			clean: true
		},
		plugins: buildPlugins(options),
		devtool: isDev ? 'inline-source-map' : undefined,
		devServer: isDev ? buildDevServer(options) : undefined
	};
};

export default buildWebpackConfig;
