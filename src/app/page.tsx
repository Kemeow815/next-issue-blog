import React from 'react'
import Profile from '@/components/Profile'
import useTranslation from '@/hooks/useTranslation'
import Link from 'next/link'
import LatestPosts from "@/app/LatestPosts";
import Projects from './Projects'

// export const revalidate = 86400

const Title: React.FC<{ text: string }> = props => {
  const { text } = props

  return <h2 className="flex items-center justify-between mt-16 text-2xl font-bold">{text}</h2>
}

export default async function Home() {
  const { t } = useTranslation()

  return (
    <>
      <div className="prose-container">
        <Profile />
        <p className="mt-4 break-words leading-loose">
          你好 👋，我是一个普通的大二学生（2023 ～ 至今），自动化技术与应用专业，在南京双非二本学校读书。
        </p>
        <p className="mt-4 break-words leading-loose">
          我致力于分享资源、生活记录和踩坑教程，如果你想要找什么资源，可以在<a href="mailto:kemiaoofx@163.com" target="_blank">邮箱</a>和<a href="https://github.com/Kemeow815/kemiaofx/issues" target="_blank">GitHub issues</a>找我。
          我看到了会尽量帮助，不保成功；如果我的文章侵犯了您的权益，请同样联系我删除。
        </p>
        <p className="mt-4 break-words leading-loose">
          欢迎您来到我的博客，祝您在这里得偿所愿😎。
        </p>
        <Title text={t('home-page.posts.title')} />
        <LatestPosts />
        <div className="text-center mt-6">
          <Link
            className="inline-flex items-center justify-center gap-1 font-medium text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
            href="/posts"
          >
            {t('home-page.posts.view-all')}
          </Link>
        </div>
        <Title text={t('home-page.projects.title')} />
        <Projects />
        <div className="text-center mt-6">
          <Link
            className="inline-flex items-center justify-center gap-1 text-zinc-400 border-b border-zinc-400/10 hover:border-zinc-400/50 transition-colors"
            href="https://github.com/xiaojundebug?tab=repositories&sort=stargazers"
          >
            {t('home-page.projects.view-all')}
          </Link>
        </div>
      </div>
    </>
  )
}
