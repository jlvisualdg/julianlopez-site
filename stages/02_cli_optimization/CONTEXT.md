# CLI Optimization — Stage Contract
> Layer 2 · Stage 2 of 3 · Last Updated: 2026-06-16

## Inputs
- Layer 4 (working): ../01_github_setup/output/ — GitHub repository URL, production site URL, deployment configuration
- Layer 3 (reference): ../../_config/tech_stack.md — Performance requirements and standards
- Layer 3 (reference): ../../_config/aeo_principles.md — AEO optimization requirements
- Layer 3 (reference): references/performance_audit.md — Performance optimization strategies (to be created)
- Layer 3 (reference): references/seo_checklist.md — SEO/AEO optimization checklist (to be created)
- Source code: `Hub/` folder (deployed Next.js application)
- Deployment: Live production site from Stage 01

## Process

1. **Current Performance Audit**
   - Run Lighthouse audit on production site
   - Analyze Core Web Vitals (LCP, FID, CLS)
   - Check PageSpeed Insights scores
   - Identify performance bottlenecks
   - Document current metrics in baseline report

2. **Performance Optimization**
   - Optimize images (WebP format, lazy loading, compression)
   - Minimize JavaScript bundles (code splitting, tree shaking)
   - Optimize CSS (remove unused styles, critical CSS)
   - Implement caching strategies (browser caching, CDN caching)
   - Optimize fonts (web font loading, font display)
   - Reduce server response time
   - Enable compression (gzip, Brotli)

3. **CLI-Specific Optimization**
   - Analyze command-line interface performance (if applicable)
   - Optimize build scripts and development experience
   - Improve CLI tooling and automation
   - Set up performance monitoring and alerting
   - Create CLI optimization scripts and workflows

4. **SEO & AEO Enhancement**
   - Verify and enhance meta tags (titles, descriptions, Open Graph)
   - Validate structured data (JSON-LD) markup
   - Optimize URL structure and internal linking
   - Improve content organization and hierarchy
   - Enhance semantic HTML and accessibility
   - Implement canonical tags where needed
   - Optimize robots.txt and sitemap.xml

5. **Mobile Optimization**
   - Ensure mobile-first design is fully responsive
   - Optimize touch interactions and mobile UX
   - Test on various mobile devices and browsers
   - Optimize for mobile network conditions
   - Implement mobile-specific performance optimizations

6. **Accessibility Improvements**
   - Conduct accessibility audit (WCAG AA compliance)
   - Improve keyboard navigation
   - Enhance screen reader compatibility
   - Optimize color contrast and visual clarity
   - Add ARIA labels where needed
   - Test with accessibility tools

7. **Advanced Optimizations**
   - Implement edge computing if beneficial
   - Set up image CDN and optimization
   - Configure service workers for offline capability
   - Implement resource hints (preload, prefetch, preconnect)
   - Optimize third-party scripts and integrations

8. **Monitoring & Analytics Setup**
   - Set up Google Analytics 4 (or alternative)
   - Configure Core Web Vitals monitoring
   - Set up error tracking and logging
   - Implement performance monitoring dashboards
   - Create automated performance reports

9. **Final Testing & Validation**
   - Run comprehensive Lighthouse audit (target 90+ all categories)
   - Test on multiple browsers and devices
   - Validate all optimizations are working
   - Document performance improvements
   - Create optimization maintenance plan

## Outputs
- `performance_baseline_report.md` → output/ — Initial performance metrics and analysis
- `optimization_plan.md` → output/ — Detailed optimization strategy
- `cli_optimization_workflow.md` → output/ — CLI-specific optimizations and scripts
- `aeo_enhancement_report.md` → output/ — SEO/AEO improvements implemented
- `final_audit_results.md` → output/ — Post-optimization Lighthouse audit results
- `monitoring_setup.md` → output/ — Analytics and monitoring configuration
- `optimization_maintenance_plan.md` → output/ — Ongoing optimization strategy

## Constraints
- **Business Objective:** Achieve 90+ Lighthouse score across all metrics, improve Core Web Vitals
- **Technical Constraints:** Next.js 14, TypeScript, Tailwind CSS, maintain existing functionality
- **Performance Requirements:** LCP < 2.5s, FID < 100ms, CLS < 0.1
- **AEO Requirements:** Valid structured data, optimized meta tags, semantic HTML
- **Do NOT:** Break existing functionality, sacrifice user experience for performance, skip accessibility
- **Quality Requirements:** All optimizations must be tested and validated

## Human Review Gate

Before Stage 03 (Content Expansion) runs:
- Review performance baseline report
- Approve optimization strategy
- Verify CLI optimizations are appropriate
- Confirm AEO enhancements are complete
- Review final audit results and improvements
- Approve monitoring and maintenance plan
- **This is where optimization decisions happen — ensure business requirements are met**

## Success Criteria

Stage completion is confirmed when:
- [ ] Lighthouse score 90+ across all categories
- [ ] Core Web Vitals passing (all metrics green)
- [ ] PageSpeed Insights score 90+ for mobile and desktop
- [ ] CLI performance optimized (if applicable)
- [ ] AEO enhancements validated (structured data error-free)
- [ ] Mobile optimization verified
- [ ] Accessibility audit passed (WCAG AA)
- [ ] Monitoring and analytics configured
- [ ] All functionality tested and working

## Performance Targets

### Baseline vs. Target Metrics
| Metric | Baseline | Target | Improvement |
|--------|----------|--------|-------------|
| Lighthouse Performance | [TBD] | 90+ | [TBD] |
| Lighthouse Accessibility | [TBD] | 90+ | [TBD] |
| Lighthouse Best Practices | [TBD] | 90+ | [TBD] |
| Lighthouse SEO | [TBD] | 90+ | [TBD] |
| LCP (Largest Contentful Paint) | [TBD] | < 2.5s | [TBD] |
| FID (First Input Delay) | [TBD] | < 100ms | [TBD] |
| CLS (Cumulative Layout Shift) | [TBD] | < 0.1 | [TBD] |

## Known Issues & Considerations

- **Third-Party Scripts:** May impact performance, evaluate necessity
- **Images:** High-quality speaking photos may need optimization
- **External APIs:** If any external integrations, optimize API calls
- **Browser Compatibility:** Ensure optimizations work across browsers
- **Build Time:** Some optimizations may increase build time, evaluate tradeoffs

## Tools & Resources

### Performance Tools
- **Lighthouse:** Built-in Chrome audit tool
- **PageSpeed Insights:** Google's performance analysis tool
- **WebPageTest:** Detailed performance testing
- **GTmetrix:** Performance monitoring and optimization

### SEO/AEO Tools
- **Google Search Console:** Search performance and indexing
- **Schema.org Validator:** Structured data validation
- **Rich Results Test:** Test rich snippets and structured data
- **Screaming Frog:** SEO spider and audit tool

### CLI Optimization Tools
- **Next.js Built-in:** Automatic code splitting, image optimization
- **Webpack Bundle Analyzer:** Bundle size analysis
- **Chrome DevTools:** Performance profiling and debugging

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2026-06-16 | Stage contract created | System |

---

**Status:** Ready to execute after Stage 01 completion — awaiting human review and approval