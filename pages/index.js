import Head from 'next/head'
import FilterableProductTable from '../components/FilterableProductTable'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>
          <FilterableProductTable />
        </div>
      </main>

      <footer className={styles.footer}>
        footer
      </footer>
    </div>
  )
}
