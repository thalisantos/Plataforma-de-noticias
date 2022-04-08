import { SignInButton } from '../SignInButton';
import styles from './styles.module.scss';
import Image from 'next/image'


export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src="/images/logo.svg" alt="ig.news" width="100%" height="100%" ></Image>
        <nav>
          <a className={styles.active} href="">Home</a>
          <a href="">Posts</a>
        </nav>

        <SignInButton />

      </div>
    </header >
  );
}