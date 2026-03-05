import 'package:flutter/material.dart';
import 'dart:math' as math;
import '../../../core/theme/app_colors.dart';
import '../../../core/constants/app_strings.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 900;

    return Semantics(
      container: true,
      label: 'Sección Filosofía',
      child: Container(
        width: double.infinity,
        decoration: const BoxDecoration(
          color: Colors.white,
        ),
        child: Stack(
          children: [
            // Background Decorative Shape - Positioned MUST be direct child of Stack
            Positioned(
              right: -100,
              top: 100,
              child: ExcludeSemantics(
                child: Opacity(
                  opacity: 0.05,
                  child: Transform.rotate(
                    angle: math.pi / 4,
                    child: Container(
                      width: 400,
                      height: 400,
                      decoration: BoxDecoration(
                        color: AppColors.primary,
                        borderRadius: BorderRadius.circular(80),
                      ),
                    ),
                  ),
                ),
              ),
            ),

            Padding(
              padding: EdgeInsets.symmetric(
                horizontal: isMobile ? 24 : 64,
                vertical: 120,
              ),
              child: Center(
                child: ConstrainedBox(
                  constraints: const BoxConstraints(maxWidth: 1200),
                  child: Column(
                    children: [
                      // Header Section
                      Row(
                        children: [
                          ExcludeSemantics(
                            child: Container(
                              width: 60,
                              height: 2,
                              color: AppColors.primary,
                            ),
                          ),
                          const SizedBox(width: 24),
                          Semantics(
                            label: 'Título de la sección',
                            child: Text(
                              AppStrings.aboutTitle.toUpperCase(),
                              style: const TextStyle(
                                color: AppColors.primary,
                                fontSize: 16,
                                letterSpacing: 4.0,
                                fontWeight: FontWeight.bold,
                              ),
                            ),
                          ),
                        ],
                      ),
                      const SizedBox(height: 32),
                      Align(
                        alignment: Alignment.centerLeft,
                        child: ConstrainedBox(
                          constraints: const BoxConstraints(maxWidth: 700),
                          child: Semantics(
                            header: true,
                            child: Text(
                              AppStrings.aboutSubtitle,
                              style: Theme.of(context)
                                  .textTheme
                                  .displayMedium
                                  ?.copyWith(
                                    color: AppColors.text,
                                    fontWeight: FontWeight.w800,
                                    height: 1.2,
                                  ),
                            ),
                          ),
                        ),
                      ),
                      const SizedBox(height: 80),

                      // Principles Grid
                      LayoutBuilder(
                        builder: (context, constraints) {
                          return Wrap(
                            spacing: 32,
                            runSpacing: 32,
                            alignment: WrapAlignment.center,
                            children: [
                              _PrincipleCard(
                                title: AppStrings.principle1Title,
                                description: AppStrings.principle1Desc,
                                icon: Icons.chat_bubble_outline_rounded,
                                index: 0,
                              ),
                              _PrincipleCard(
                                title: AppStrings.principle2Title,
                                description: AppStrings.principle2Desc,
                                icon: Icons.favorite_border_rounded,
                                index: 1,
                              ),
                              _PrincipleCard(
                                title: AppStrings.principle3Title,
                                description: AppStrings.principle3Desc,
                                icon: Icons.auto_awesome_outlined,
                                index: 2,
                              ),
                            ],
                          );
                        },
                      ),
                    ],
                  ),
                ),
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class _PrincipleCard extends StatefulWidget {
  final String title;
  final String description;
  final IconData icon;
  final int index;

  const _PrincipleCard({
    required this.title,
    required this.description,
    required this.icon,
    required this.index,
  });

  @override
  State<_PrincipleCard> createState() => _PrincipleCardState();
}

class _PrincipleCardState extends State<_PrincipleCard> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      container: true,
      label: 'Principio: ${widget.title}. ${widget.description}',
      child: MouseRegion(
        onEnter: (_) => setState(() => _isHovered = true),
        onExit: (_) => setState(() => _isHovered = false),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          width: 360,
          padding: const EdgeInsets.all(48),
          decoration: BoxDecoration(
            color: _isHovered ? AppColors.primary : Colors.white,
            borderRadius: BorderRadius.circular(32),
            border: Border.all(
              color: _isHovered ? AppColors.primary : Colors.grey[200]!,
              width: 1,
            ),
            boxShadow: [
              BoxShadow(
                color: _isHovered
                    ? AppColors.primary.withValues(alpha: 0.3)
                    : Colors.black.withValues(alpha: 0.05),
                blurRadius: _isHovered ? 40 : 20,
                offset: Offset(0, _isHovered ? 20 : 10),
              ),
            ],
          ),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              ExcludeSemantics(
                child: AnimatedContainer(
                  duration: const Duration(milliseconds: 300),
                  padding: const EdgeInsets.all(16),
                  decoration: BoxDecoration(
                    color: _isHovered
                        ? Colors.white.withValues(alpha: 0.2)
                        : AppColors.secondary.withValues(alpha: 0.5),
                    borderRadius: BorderRadius.circular(16),
                  ),
                  child: Icon(
                    widget.icon,
                    size: 32,
                    color: _isHovered ? Colors.white : AppColors.primary,
                  ),
                ),
              ),
              const SizedBox(height: 32),
              Text(
                widget.title,
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: _isHovered ? Colors.white : AppColors.text,
                ),
              ),
              const SizedBox(height: 16),
              Text(
                widget.description,
                style: TextStyle(
                  fontSize: 16,
                  color: _isHovered
                      ? Colors.white.withValues(alpha: 0.9)
                      : Colors.grey[700],
                  height: 1.6,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
