const urls = {
  products: "/v1/products",
  // posts: "/v1/posts",
  history: "/v1/history",
  getHomeInformation: "/getHomeInformation",
  /**
   * 首页
   */
  // 置顶信息
  getPostsTop: "/gm/app/posts/getTop",
  /**
   * 评论管理
   */
  // 获取评论列表
  getCommentList: "/gm/app/comment-list",
  // 子评论数
  getCommentChildNumber: "/gm/app/comment-child-number",
  // 删除
  // deleteComment: "/gm/comment/delete",
  // 详情
  // getCommentInfo: "/gm/comment/info",
  // 新增
  // saveComment: "/gm/comment/save",
  saveComment: "/gm/app/comment-add",
  // 编辑
  // updateComment: "/gm/comment/update"
  /**
   * 栏目管理
   */
  // 栏目列表
  getColumnList: "/gm/app/column-management-list",
  /**
   * 贴文管理
   */
  // 列表
  getPostsList: "/gm/app/posts/getList",
  // 帖子列表用于儿子栏目
  getPostsListForChild: "/gm/app/posts/getAll",
  // 详情
  getPostsInfo: "/gm/app/posts/getInfo",
  // 帖子点赞 评论点赞
  postsOrCommentLike: "/gm/app/comment-like",
  // 发帖
  createPosts: "/gm/app/posts/saveOrdinary",
  // 图片获取签名
  preUpload: "/gm/s3/preUpload",
  // 图片设置权限
  setAcl: "/gm/s3/setAcl",
  // 删除贴文
  deletePosts: "/gm/posts/delete",
  // 轮播列表
  getPostsCarouselList: "/gm/postsCarousel/getList",
  /**
   * 话题
   */
  // 推荐话题列表-all
  getHotTopics: "/gm/app/topicTag/getRecommend",
  // 话题列表
  getTopicsList: "/gm/app/topicTag/getList",
  // 话题列表(不分页)
  getTopicsListAll: "/gm/app/topicTag/getAll",
  // 话题详情
  getTopicsInfo: "/gm/topicTag/info",
  /**
   * 热搜
   *
   */
  // 列表
  getHotSearchList: "/gm/app/hotSearch/getList",
  // 热度更新
  updateHotSearch: (id: string) => `/gm/app/hotSearch/updateHotSearch/${id}`,
  /**
   * 我的
   */
  // 我的-发帖数和点赞数
  getUserLikesAndCreateStatistics: "/gm/app/user/like-statistics",
  // 我的消息列表 我的-消息中心
  getMessageCenterList: "/gm/app/user/message-center",
  // 我的-消息中心-标记已读
  setMessageRead: "/gm/app/user/message-center-set-read",
  // 统计未读信息数 我的-消息中心-统计
  getUnreadNumber: "/gm/app/user/message-center-statistics",
  // 用户信息
  getUserInfo: "/gm/app/user/userInfo",
  // 我的-发帖
  getMyPostsList: "/gm/app/user/posts-list",
  // 我的浏览记录
  getMyViewList: "/gm/app/user/view-list",
  /**
   * 英雄
   */
  // 英雄列表
  getHeroList: "/gm/app/getHeroList",
  getHeroInfo: "/gm/app/getHeroInfo",
  /**
   * 配置
   */
  getConfig: "/gm/config/getConfig",
  /**
   * 举报
   */
  doReport: "/gm/app/report",
  /**
   * 翻译
   */
  doTranslate: "/gm/app/translate",
};

export default urls;
