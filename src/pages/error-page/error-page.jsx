import styles from './error-page.module.scss'

export default function ErrorPage() {

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.code}>404</p>
          <h1 className={styles.message}>Page not found</h1>
        </div>
      </div>
    </section>
  );
}
