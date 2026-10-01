import React from 'react';
import { FiX, FiTrash2, FiArrowRight, FiShoppingBag } from 'react-icons/fi';
import styles from './CartDrawer.module.css';

export default function CartDrawer({
  isOpen,
  onClose,
  items,
  onRemoveItem
}) {
  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.drawer} onClick={(e) => e.stopPropagation()}>
        {/* Drawer Header */}
        <div className={styles.header}>
          <div className={styles.headerTitle}>
            <FiShoppingBag className={styles.bagIcon} />
            <h3>Your Cart ({items.length})</h3>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close cart">
            <FiX size={20} />
          </button>
        </div>

        {/* Cart Items List */}
        <div className={styles.itemsList}>
          {items.length > 0 ? (
            items.map((item) => (
              <div key={item.id} className={styles.cartItem}>
                <img src={item.thumbnail} alt={item.title} className={styles.itemImg} />
                <div className={styles.itemInfo}>
                  <h4 className={styles.itemTitle}>{item.title}</h4>
                  <span className={styles.itemAuthor}>by {item.author}</span>
                  <div className={styles.priceRow}>
                    <span className={styles.itemPrice}>${item.price}</span>
                    <button
                      className={styles.removeBtn}
                      onClick={() => onRemoveItem(item.id)}
                      aria-label="Remove item"
                    >
                      <FiTrash2 size={14} /> Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className={styles.emptyCart}>
              <FiShoppingBag size={48} className={styles.emptyIcon} />
              <p>Your cart is empty.</p>
              <button className={styles.exploreBtn} onClick={onClose}>
                Explore Courses
              </button>
            </div>
          )}
        </div>

        {/* Drawer Footer with Checkout */}
        {items.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotalRow}>
              <span>Total:</span>
              <span className={styles.totalPrice}>${total}</span>
            </div>
            <button
              className={styles.checkoutBtn}
              onClick={() => alert(`Proceeding to checkout for $${total}! Thank you for choosing ByteSpace.`)}
            >
              Checkout Now <FiArrowRight />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
