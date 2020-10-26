//actions  定义方法来提交mutations中定义的方法
import { getHomeSwipe } from "@/api/index";
import { getGoodsList, getGoodsDetail } from "@/api/list.js";
const actions = {
    actAddNum(context) {
        context.commit("addNum")
    },
    actAddNumX(context, data) {
        context.commit("addNumX", data)
    },
    actgetCategoryDatas(context, data) {
        context.commit("getCategoryDatas", data)
    },
    async actGetSwipeDatas(context) {
        const result = await getHomeSwipe()
        context.commit("getSwipeDatas", result.data)
    },
    getUserInfo(context, data) {
        context.commit("getUserInfo", data)
    },
    async getGoodsList(context, data) {
        const result = await getGoodsList(data)
        context.commit("getGoodsList", result.data)
    },
    async getGoodsDetails(context, params) {
        const result = await getGoodsDetail(params)
        context.commit("getGoodsDetails", result.data[0])
    }
}


export default actions
