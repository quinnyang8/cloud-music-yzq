//统一的接口
import { recommendMusic, hotMusic } from "@/api/Home";
import { hotSearch, searchResult } from "@/api/Search";
import { getSongById, getLyricById } from "@/api/Play";
import { getCommentList } from "@/api/Comment"

export const recommendMusicAPI = recommendMusic//把网络接口拿出来导出
export const hotMusicAPI = hotMusic //把获取最新音乐的网络请求方法导出
export const hotSearchAPI = hotSearch //热搜
export const searchResultAPI = searchResult//搜索结果

export const getSongByIdAPI = getSongById//歌曲详情
export const getLyricByIdAPI = getLyricById//歌词
export const getCommentListAPI = getCommentList