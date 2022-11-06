import { CHANGE_SCORE, PLAY_GAME } from "../constans/baucauConstans";

export const playGame = () => {
    return {
        type: PLAY_GAME,
    };
}
// dispatch(playGame()) => dispatch({type: "play_game"})

export const changeScore = (ma, diemCuoc) => {
    return {
        type: CHANGE_SCORE,
        payload: {ma, diemCuoc}
    }
}
