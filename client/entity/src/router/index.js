import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import About from '@/pages/About'
import Register from '@/pages/Register'
import Serve from '@/pages/Serve'
import Product from '@/pages/Product'
import ProductDetail from '@/pages/ProductDetail'
import Blogs from '@/pages/Blogs'
import BlogEdit from '@/pages/BlogEdit'
import MyBlogs from '@/pages/MyBlogs'
import Article from '@/pages/Article'
import Verify from '@/pages/Verify'
import Partners from '@/pages/Partners'
import Video from '@/pages/Video'
import Strengths from '@/pages/Strengths'
import InfoServe from '@/pages/InfoServe'
import FlowServe from '@/pages/FlowServe'
import ResourceServe from '@/pages/ResourceServe'
import ContractServe from '@/pages/ContractServe'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/serve',
      name: 'serve',
      component: Serve
    },
    {
      path: '/products',
      name: 'products',
      component: Product
    },
    {
      path: '/product/:id',
      name: 'productDetail',
      component: ProductDetail
    },
    {
      path: '/blogs',
      name: 'blogs',
      component: Blogs
    },
    {
      path: '/blogedit',
      name: 'blogedit',
      component: BlogEdit
    },
    {
      path: '/myblogs',
      name: 'myblogs',
      component: MyBlogs
    },
    {
      path: '/article/:aId',
      name: 'article',
      component: Article
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    {
      path: '/partners',
      name: 'partners',
      component: Partners
    },
    {
      path: '/video',
      name: 'video',
      component: Video
    },
    {
      path: '/strengths',
      name: 'strengths',
      component: Strengths
    },
    {
      path: '/info-serve',
      name: 'info-serve',
      component: InfoServe
    },
    {
      path: '/flow-serve',
      name: 'flow-serve',
      component: FlowServe
    },
    {
      path: '/resource-serve',
      name: 'resource-serve',
      component: ResourceServe
    },
    {
      path: '/contract-serve',
      name: 'contract-serve',
      component: ContractServe
    }
  ]
})
