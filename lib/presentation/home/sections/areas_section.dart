import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/constants/app_strings.dart';

class AreasSection extends StatelessWidget {
  const AreasSection({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 900;

    return Semantics(
      container: true,
      label: 'Sección Áreas de Intervención',
      child: Container(
        width: double.infinity,
        padding: EdgeInsets.symmetric(
          vertical: 120,
          horizontal: isMobile ? 24 : 64,
        ),
        decoration: const BoxDecoration(color: Colors.white),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1000),
            child: Column(
              children: [
                // Header
                Column(
                  children: [
                    Semantics(
                      label: 'Título de la sección',
                      child: Text(
                        AppStrings.areasTitle.toUpperCase(),
                        style: const TextStyle(
                          color: AppColors.primary,
                          fontSize: 16,
                          letterSpacing: 6.0,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ),
                    const SizedBox(height: 24),
                    Semantics(
                      header: true,
                      child: Text(
                        AppStrings.areasSubtitle,
                        textAlign: TextAlign.center,
                        style: Theme.of(context)
                            .textTheme
                            .displaySmall
                            ?.copyWith(
                              color: AppColors.text,
                              fontWeight: FontWeight.w800,
                            ),
                      ),
                    ),
                    const SizedBox(height: 16),
                    Text(
                      AppStrings.areasIntro,
                      style: TextStyle(
                        fontSize: 18,
                        color: Colors.grey[600],
                        letterSpacing: 1.2,
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 80),

                // Areas Accordion
                Column(
                  children: [
                    _AreaCard(
                      title: AppStrings.area1Intro,
                      items: AppStrings.area1Items,
                      icon: Icons.auto_stories_outlined,
                    ),
                    const SizedBox(height: 24),
                    _AreaCard(
                      title: AppStrings.area2Intro,
                      items: AppStrings.area2Items,
                      icon: Icons.psychology_outlined,
                    ),
                    const SizedBox(height: 24),
                    _AreaCard(
                      title: AppStrings.area3Intro,
                      items: AppStrings.area3Items,
                      icon: Icons.record_voice_over_outlined,
                    ),
                    const SizedBox(height: 24),
                    _AreaCard(
                      title: AppStrings.area4Intro,
                      items: AppStrings.area4Items,
                      icon: Icons.elderly_outlined,
                    ),
                  ],
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}

class _AreaCard extends StatefulWidget {
  final String title;
  final List<String> items;
  final IconData icon;

  const _AreaCard({
    required this.title,
    required this.items,
    required this.icon,
  });

  @override
  State<_AreaCard> createState() => _AreaCardState();
}

class _AreaCardState extends State<_AreaCard> {
  bool _isExpanded = false;
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      container: true,
      onTapHint: _isExpanded ? 'Cerrar detalles' : 'Ver detalles detallados',
      child: MouseRegion(
        onEnter: (_) => setState(() => _isHovered = true),
        onExit: (_) => setState(() => _isHovered = false),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(24),
            border: Border.all(
              color: _isExpanded || _isHovered
                  ? AppColors.primary.withValues(alpha: 0.3)
                  : Colors.grey[200]!,
              width: 1.5,
            ),
            boxShadow: [
              BoxShadow(
                color: _isExpanded || _isHovered
                    ? AppColors.primary.withValues(alpha: 0.08)
                    : Colors.black.withValues(alpha: 0.03),
                blurRadius: 30,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: Theme(
            data: Theme.of(context).copyWith(dividerColor: Colors.transparent),
            child: ExpansionTile(
              onExpansionChanged: (expanded) =>
                  setState(() => _isExpanded = expanded),
              leading: ExcludeSemantics(
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  padding: const EdgeInsets.all(12),
                  decoration: BoxDecoration(
                    color: _isExpanded
                        ? AppColors.primary
                        : AppColors.secondary.withValues(alpha: 0.4),
                    borderRadius: BorderRadius.circular(12),
                  ),
                  child: Icon(
                    widget.icon,
                    color: _isExpanded ? Colors.white : AppColors.primary,
                    size: 24,
                  ),
                ),
              ),
              tilePadding:
                  const EdgeInsets.symmetric(horizontal: 24, vertical: 12),
              childrenPadding: const EdgeInsets.fromLTRB(32, 0, 32, 32),
              iconColor: AppColors.primary,
              collapsedIconColor: Colors.grey[400],
              title: Text(
                widget.title,
                style: TextStyle(
                  fontSize: 18,
                  fontWeight: _isExpanded ? FontWeight.bold : FontWeight.w600,
                  color: _isExpanded ? AppColors.primary : AppColors.text,
                ),
              ),
              children: [
                const ExcludeSemantics(
                  child: Divider(height: 40, color: Colors.black12),
                ),
                ...widget.items.map((item) => _buildListItem(item)),
              ],
            ),
          ),
        ),
      ),
    );
  }

  Widget _buildListItem(String text) {
    return Padding(
      padding: const EdgeInsets.only(bottom: 16),
      child: Row(
        crossAxisAlignment: CrossAxisAlignment.start,
        children: [
          ExcludeSemantics(
            child: Container(
              margin: const EdgeInsets.only(top: 8),
              width: 8,
              height: 8,
              decoration: BoxDecoration(
                color: AppColors.secondary,
                shape: BoxShape.circle,
                border: Border.all(color: AppColors.primary, width: 2),
              ),
            ),
          ),
          const SizedBox(width: 20),
          Expanded(
            child: Semantics(
              label: 'Ítem: $text',
              child: Text(
                text,
                style: TextStyle(
                  fontSize: 16,
                  color: AppColors.text.withValues(alpha: 0.8),
                  height: 1.5,
                  fontWeight: FontWeight.w500,
                ),
              ),
            ),
          ),
        ],
      ),
    );
  }
}
