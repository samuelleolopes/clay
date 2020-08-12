/**
 * SPDX-FileCopyrightText: © 2018 Liferay, Inc. <https://liferay.com>
 * SPDX-License-Identifier: BSD-3-Clause
 */

// A stub function is needed because gatsby won't load this file otherwise
// (https://github.com/gatsbyjs/gatsby/issues/6759)
export const onClientEntry = () => {
	if (process.env.GATSBY_CLAY_NIGHTLY === 'true') {
		const isNullOrTrue = (val) => val === 'true' || val === null;

		let showAtlas = true;
		let showSiteCss = true;

		try {
			showAtlas = isNullOrTrue(localStorage.getItem('clay.showAtlas'));

			showSiteCss = isNullOrTrue(
				localStorage.getItem('clay.showSiteCss')
			);
		} catch {} // eslint-disable-line no-empty

		if (showAtlas) {
			require('@clayui/css/src/scss/atlas.scss');
		} else {
			require('@clayui/css/src/scss/base.scss');
		}

		if (showSiteCss) {
			require('./src/styles/main.scss');
		}
	} else {
		require('@clayui/css/src/scss/atlas.scss');
		require('./src/styles/main.scss');
	}
};
