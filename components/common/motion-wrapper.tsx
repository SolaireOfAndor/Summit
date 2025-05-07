"use client"

import { ReactNode } from "react"
import { motion } from "framer-motion"

/**
 * @component MotionDiv
 * @description A wrapper component for framer-motion animations, providing a convenient way to
 * add animation capabilities to elements. Uses motion.div from framer-motion with configurable
 * animation properties.
 * 
 * @example
 * ```tsx
 * <MotionDiv
 *   initial={{ opacity: 0 }}
 *   animate={{ opacity: 1 }}
 *   transition={{ duration: 0.5 }}
 *   className="p-4 bg-white"
 * >
 *   Content to animate
 * </MotionDiv>
 * ```
 * 
 * @category Common
 * @usedIn Various components requiring animations, transitions, and scroll effects
 */
interface MotionDivProps {
  /** Child elements to be rendered within the motion div */
  children: ReactNode
  /** Optional CSS classes to apply to the motion div */
  className?: string
  /** Initial animation state */
  initial?: any
  /** Target animation state */
  animate?: any
  /** Exit animation state for AnimatePresence context */
  exit?: any
  /** Animation transition configuration */
  transition?: any
  /** Animation state to use when element comes into view */
  whileInView?: any
  /** Viewport observation options for whileInView animations */
  viewport?: any
}

export function MotionDiv({
  children,
  className,
  initial,
  animate,
  exit,
  transition,
  whileInView,
  viewport,
}: MotionDivProps) {
  return (
    <motion.div
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.div>
  )
}

/**
 * @component MotionSection
 * @description A section element wrapper with framer-motion animation capabilities. Useful for
 * animating entire page sections on scroll or mount.
 * 
 * @example
 * ```tsx
 * <MotionSection
 *   initial={{ y: 100, opacity: 0 }}
 *   whileInView={{ y: 0, opacity: 1 }}
 *   transition={{ duration: 0.7 }}
 *   viewport={{ once: true }}
 *   className="py-12"
 * >
 *   <h2>Section Title</h2>
 *   <p>Section content...</p>
 * </MotionSection>
 * ```
 * 
 * @category Common
 * @usedIn Page sections that require scroll-based or mount animations
 */
interface MotionSectionProps {
  /** Child elements to be rendered within the motion section */
  children: ReactNode
  /** Optional CSS classes to apply to the motion section */
  className?: string
  /** Initial animation state */
  initial?: any
  /** Target animation state */
  animate?: any
  /** Exit animation state for AnimatePresence context */
  exit?: any
  /** Animation transition configuration */
  transition?: any
  /** Animation state to use when element comes into view */
  whileInView?: any
  /** Viewport observation options for whileInView animations */
  viewport?: any
}

export function MotionSection({
  children,
  className,
  initial,
  animate,
  exit,
  transition,
  whileInView,
  viewport,
}: MotionSectionProps) {
  return (
    <motion.section
      className={className}
      initial={initial}
      animate={animate}
      exit={exit}
      transition={transition}
      whileInView={whileInView}
      viewport={viewport}
    >
      {children}
    </motion.section>
  )
} 