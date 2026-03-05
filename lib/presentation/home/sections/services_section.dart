import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/constants/app_strings.dart';

class ServicesSection extends StatelessWidget {
  const ServicesSection({super.key});

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 900;

    return Semantics(
      container: true,
      label: 'Sección de Servicios',
      child: Container(
        width: double.infinity,
        padding: EdgeInsets.symmetric(
          vertical: 120,
          horizontal: isMobile ? 24 : 64,
        ),
        color: AppColors.primary.withValues(alpha: 0.02),
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1200),
            child: Column(
              children: [
                // Section Header
                Column(
                  children: [
                    Semantics(
                      label: 'Título de la sección',
                      child: Text(
                        AppStrings.servicesTitle.toUpperCase(),
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
                        AppStrings.servicesSubtitle,
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
                    ExcludeSemantics(
                      child: Container(
                        width: 80,
                        height: 4,
                        decoration: BoxDecoration(
                          color: AppColors.secondary,
                          borderRadius: BorderRadius.circular(2),
                        ),
                      ),
                    ),
                  ],
                ),
                const SizedBox(height: 80),

                // Services Grid
                Wrap(
                  spacing: 32,
                  runSpacing: 32,
                  alignment: WrapAlignment.center,
                  children: [
                    _ServiceCard(
                      title: AppStrings.service1Title,
                      icon: "assets/icons/baby-boy.png",
                      color: const Color(0xFFFCE4EC),
                      tintColor: const Color(0xFFD81B60),
                    ),
                    _ServiceCard(
                      title: AppStrings.service2Title,
                      icon: "assets/icons/mindset.png",
                      color: const Color(0xFFE3F2FD),
                      tintColor: const Color(0xFF1E88E5),
                    ),
                    _ServiceCard(
                      title: AppStrings.service3Title,
                      icon: "assets/icons/speak.png",
                      color: const Color(0xFFFFF8E1),
                      tintColor: const Color(0xFFFFB300),
                    ),
                    _ServiceCard(
                      title: AppStrings.service4Title,
                      icon: "assets/icons/family.png",
                      color: const Color(0xFFEDE7F6),
                      tintColor: const Color(0xFF7B1FA2),
                    ),
                    _ServiceCard(
                      title: AppStrings.service5Title,
                      icon: "assets/icons/aging.png",
                      color: const Color(0xFFE8F5E9),
                      tintColor: const Color(0xFF43A047),
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

class _ServiceCard extends StatefulWidget {
  final String title;
  final String icon;
  final Color color;
  final Color tintColor;

  const _ServiceCard({
    required this.title,
    required this.icon,
    required this.color,
    required this.tintColor,
  });

  @override
  State<_ServiceCard> createState() => _ServiceCardState();
}

class _ServiceCardState extends State<_ServiceCard> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      container: true,
      label: 'Servicio: ${widget.title}',
      child: MouseRegion(
        onEnter: (_) => setState(() => _isHovered = true),
        onExit: (_) => setState(() => _isHovered = false),
        child: AnimatedContainer(
          duration: const Duration(milliseconds: 300),
          width: 320,
          height: 380,
          padding: const EdgeInsets.all(40),
          decoration: BoxDecoration(
            color: Colors.white,
            borderRadius: BorderRadius.circular(32),
            boxShadow: [
              BoxShadow(
                color: _isHovered
                    ? widget.tintColor.withValues(alpha: 0.15)
                    : Colors.black.withValues(alpha: 0.04),
                blurRadius: _isHovered ? 40 : 20,
                offset: Offset(0, _isHovered ? 20 : 10),
              ),
            ],
            border: Border.all(
              color: _isHovered
                  ? widget.tintColor.withValues(alpha: 0.2)
                  : Colors.transparent,
              width: 2,
            ),
          ),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              ExcludeSemantics(
                child: AnimatedScale(
                  scale: _isHovered ? 1.1 : 1.0,
                  duration: const Duration(milliseconds: 300),
                  child: Container(
                    width: 120,
                    height: 120,
                    decoration: BoxDecoration(
                      color: widget.color.withValues(alpha: 0.7),
                      shape: BoxShape.circle,
                    ),
                    child: Center(
                      child: ColorFiltered(
                        colorFilter: ColorFilter.mode(
                          widget.tintColor.withValues(alpha: 0.85),
                          BlendMode.srcATop,
                        ),
                        child: Image.asset(widget.icon, width: 56, height: 56),
                      ),
                    ),
                  ),
                ),
              ),
              const SizedBox(height: 40),
              Text(
                widget.title,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  fontSize: 16,
                  fontWeight: FontWeight.w600,
                  color: AppColors.text,
                  height: 1.5,
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
