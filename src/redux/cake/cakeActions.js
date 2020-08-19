import { BUY_CAKE } from './CakeTypes';

export const buyCake = (cakeCnt = 1) => {
	return {
		type: BUY_CAKE,
		count: cakeCnt
	}
}