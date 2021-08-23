import Mock from 'mockjs'
import banner from './banners.json'
import floor from './floors.json'
import list from './list.json'

//第一个参数是以后请求数据的路径，第二个参数是代表返回的数据
Mock.mock('/mock/banner',{code:200,data:banner}) 
Mock.mock('/mock/floor',{code:200,data:floor})
Mock.mock('/mock/list','post',function({body}){
    //传输过来的并不是一个对象，而是一个对象格式字符串
    //通过结构赋值解构出body，但只是一个字符串类型数据，再转为json格式
    body = JSON.parse(body)
    console.log(body);
    if (body.category1Id) {
        console.log(body.category1Id+'======='+body.categoryName);
        return {
            "trademarkList": [
                {
                    "tmId": 1,
                    "tmName": "小米"
                }
            ],
            "total": 17,
            "pageNo": 1,
            "goodsList": [
                {
                    "tmId": null,
                    "hotScore": 0,
                    "category1Name": null,
                    "category2Id": null,
                    "category1Id": null,
                    "title": "小米10 至尊纪念版 双模5G 骁龙865 120HZ高刷新率 120倍长焦镜头 120W快充 8GB+128GB 陶瓷黑 游戏手机",
                    "attrs": null,
                    "defaultImg": "/images/mobile02.png",
                    "tmName": null,
                    "createTime": null,
                    "category3Name": null,
                    "price": 5999.0,
                    "category2Name": null,
                    "category3Id": null,
                    "id": 2
                }
            ],
            "totalPages": 9,
            "pageSize": 2,
            "attrsList": [
                {
                    "attrId": 1185,
                    "attrValueList": [
                        "美版",
                        "日版",
                        "欧版",
                        "国行" 
                    ],
                    "attrName": "版本"
                }
            ]
        }
    }else if(body.category2Id) {
        console.log(body.category2Id+'======='+body.categoryName);
        return {
            "trademarkList": [
                {
                    "tmId": 2,
                    "tmName": "苹果"
                },
                {
                    "tmId": 1,
                    "tmName": "小米"
                }
            ],
            "total": 17,
            "pageNo": 1,
            "goodsList": [
                {
                    "tmId": null,
                    "hotScore": 0,
                    "category1Name": null,
                    "category2Id": null,
                    "category1Id": null,
                    "title": "华为 HUAWEI P40 麒麟990 5G SoC芯片 5000万超感知徕卡三摄 30倍数字变焦 8GB+128GB亮黑色全网通5G手机",
                    "attrs": null,
                    "defaultImg": "/images/mobile01.png",
                    "tmName": null,
                    "createTime": null,
                    "category3Name": null,
                    "price": 4488.0,
                    "category2Name": null,
                    "category3Id": null,
                    "id": 1
                },
                {
                    "tmId": null,
                    "hotScore": 0,
                    "category1Name": null,
                    "category2Id": null,
                    "category1Id": null,
                    "title": "小米10 至尊纪念版 双模5G 骁龙865 120HZ高刷新率 120倍长焦镜头 120W快充 8GB+128GB 陶瓷黑 游戏手机",
                    "attrs": null,
                    "defaultImg": "/images/mobile02.png",
                    "tmName": null,
                    "createTime": null,
                    "category3Name": null,
                    "price": 5999.0,
                    "category2Name": null,
                    "category3Id": null,
                    "id": 2
                }
            ],
            "totalPages": 9,
            "pageSize": 2,
            "attrsList": [
                {
                    "attrId": 1170,
                    "attrValueList": [
                        "荣耀"
                    ],
                    "attrName": "品牌"
                },
                {
                    "attrId": 1185,
                    "attrValueList": [
                        "美版",
                        "日版",
                        "欧版",
                        "国行"
                    ],
                    "attrName": "版本"
                }
            ]
        }
    }else if(body.category3Id) {
        console.log(body.category3Id+'======='+body.categoryName+"=========="+body.keyword);
        if(body.keyword === '手机'){
            return list
        }else{
            return {
                "trademarkList": [
                    {
                        "tmId": 2,
                        "tmName": "苹果"
                    }
                ],
                "total": 17,
                "pageNo": 1,
                "goodsList": [
                    {
                        "tmId": null,
                        "hotScore": 0,
                        "category1Name": null,
                        "category2Id": null,
                        "category1Id": null,
                        "title": "华为 HUAWEI P40 麒麟990 5G SoC芯片 5000万超感知徕卡三摄 30倍数字变焦 8GB+128GB亮黑色全网通5G手机",
                        "attrs": null,
                        "defaultImg": "/images/mobile01.png",
                        "tmName": null,
                        "createTime": null,
                        "category3Name": null,
                        "price": 4488.0,
                        "category2Name": null,
                        "category3Id": null,
                        "id": 1
                    }
                ],
                "totalPages": 9,
                "pageSize": 2,
                "attrsList": [
                    {
                        "attrId": 1185,
                        "attrValueList": [
                            "美版"
                        ],
                        "attrName": "版本"
                    }
                ]
            }
        }
        
    }
})



