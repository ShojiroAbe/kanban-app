import store from '../store'

export const authorizeToken = (to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // マッチしたルートにおいて、メタフィールドに'requireAuth'が付与されている場合は
    // ログインした際に付与される認証トークンがあるかどうかチェックする
    // 注意：
    // このアプリケーションでは簡略化のため'au th.token'があるかどうかのみで
    // 本来ならば付与された認証トークンをバックエンドのAPI経由などで検証すべき
    if (!store.state.auth || !store.state.auth.token) {
      next({ path: '/login' })
    } else {
      next()
    }
  } else {
    next()
  }
}
