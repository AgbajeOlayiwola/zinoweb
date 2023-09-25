import React from "react";
import styles from "./styles.module.css";
import ProductFinance from "../SVGS/productFinance";
import ProductMarket from "../SVGS/productMarket";
import ProductAgro from "../SVGS/productAgro";
import ProductAdvisory from "../SVGS/productAdvisory";

const Products = () => {
  return (
    <div className={styles.productsContainer}>
      <div className={styles.productsHead}>
        <h2>Products and Services</h2>
        <p>We are a global impact-driven agricultural technology company enabling access to finance, markets, agro-services and advisory for micro, small & medium enterprises.</p>
      </div>
      <div className={styles.productsWrapper}>
        <div className={styles.productsCont}>
          <div className={styles.productsFinance}>
            <div>
              <ProductFinance />
              <h2>Finance</h2>
            </div>
            <p>We offer services such as loans, insurance,savings & investments, remittances/cash transfers</p>
          </div>
          <div className={styles.productsMarket}>
            <div>
              <ProductMarket />
              <h2>Markets</h2>
            </div>
            <p>We help provide e-commerce,airtime purchase industrial processors and exporters</p>
          </div>
        </div>
        <div className={styles.productsCont}>
          <div className={styles.productsAgro}>
            <div>
              <ProductAgro />
              <h2>Agro Services</h2>
            </div>
            <p>We help provide land clearing &/or preparation,mechanization seeds,fertilizers, harvesting, storage </p>
          </div>
          <div className={styles.productsAdvisory}>
            <div>
              <ProductAdvisory />
              <h2>Advisory</h2>
            </div>
            <p>We help offer good agricultural practices, weather information price information, farm/business management</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
