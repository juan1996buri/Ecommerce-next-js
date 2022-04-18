import React from 'react';
import Head from 'next/head';
import NexLink from 'next/link';
import {
  AppBar,
  Container,
  Link,
  Toolbar,
  Typography,
} from '@material-ui/core';
import useStyles from '../utils/styles';

export default function Layout({ title, description, children }) {
  const classes = useStyles();
  return (
    <div>
      <Head>
        <title>{title ? `${title} -  Next Amazon ` : ` Next Amazon`}</title>
        {description && <meta name="description" content={description}></meta>}
      </Head>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <NexLink href="/" passHref>
            <Link>
              <Typography className={classes.brand}>amazona</Typography>
            </Link>
          </NexLink>
          <div className={classes.grow}></div>
          <div>
            <NexLink href="/cart" passHref>
              <Link>Cart</Link>
            </NexLink>
            <NexLink href="/cart" passHref>
              <Link>Login</Link>
            </NexLink>
          </div>
        </Toolbar>
      </AppBar>
      <Container className={classes.main}>{children}</Container>
      <footer>
        <Typography className={classes.footer}>
          All right reserved. Next
        </Typography>
      </footer>
    </div>
  );
}
