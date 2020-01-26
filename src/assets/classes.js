import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  block: { width: '100%' },
  fullHeight: { minHeight: '100vh' },
  hidden: { display: 'none' },
  loginForm: { maxWidth: 300 },
  loginFormForgot: {},
  pullRight: { float: 'right' },
  small: { size: '70%' },
  textCenter: { textAlign: 'center' },
});

export default {
  block: css(styles.block),
  fullHeight: css(styles.fullHeight),
  hidden: css(styles.hidden),
  loginForm: css(styles.loginForm),
  pullRight: css(styles.pullRight),
  small: css(styles.small),
  textCenter: css(styles.textCenter),
};
