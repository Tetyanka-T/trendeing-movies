import styles from './PageNotFound.module.css';

export default function PageNotFound() {
  return (
    <>
      <h1 className={styles.error}>
        Error 404: Page Not Found
        <span role="img" aria-label="sheep">
          😮
        </span>
      </h1>
    </>
  );
}
