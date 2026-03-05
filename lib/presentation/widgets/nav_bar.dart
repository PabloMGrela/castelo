import 'package:flutter/material.dart';
import '../../core/theme/app_colors.dart';
import 'logo_widget.dart';

class NavBar extends StatelessWidget implements PreferredSizeWidget {
  final VoidCallback? onHomeTap;
  final VoidCallback? onAboutTap;
  final VoidCallback? onServicesTap;
  final VoidCallback? onContactTap;
  final VoidCallback? onInterventionAreasTap;
  final Color? backgroundColor;
  final Color? foregroundColor;

  const NavBar({
    super.key,
    this.onHomeTap,
    this.onAboutTap,
    this.onServicesTap,
    this.onContactTap,
    this.onInterventionAreasTap,
    this.backgroundColor,
    this.foregroundColor,
  });

  @override
  Size get preferredSize => const Size.fromHeight(100);

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 1100;

    return Semantics(
      container: true,
      label: 'Barra de navegación principal',
      child: Container(
        height: 100,
        decoration: BoxDecoration(
          color: backgroundColor ?? Colors.white.withValues(alpha: 0.9),
          boxShadow: [
            if (backgroundColor != Colors.transparent)
              BoxShadow(
                color: Colors.black.withValues(alpha: 0.05),
                blurRadius: 20,
                offset: const Offset(0, 4),
              ),
          ],
        ),
        padding: EdgeInsets.symmetric(
          horizontal: size.width > 1200 ? (size.width - 1200) / 2 + 40 : 40,
        ),
        child: Row(
          mainAxisAlignment: MainAxisAlignment.spaceBetween,
          children: [
            Semantics(
              label: 'Ir al inicio - Logotipo Logopedia Castelo',
              button: true,
              child: GestureDetector(
                onTap: onHomeTap ??
                    () =>
                        Navigator.of(context).popUntil((route) => route.isFirst),
                child: LogoWidget(
                  size: 160,
                  variant: LogoVariant.full,
                  color: foregroundColor,
                ),
              ),
            ),
            if (isMobile)
              Semantics(
                label: 'Abrir menú lateral',
                button: true,
                child: Builder(
                  builder: (context) => IconButton(
                    iconSize: 32,
                    icon: Icon(
                      Icons.menu_rounded,
                      color: foregroundColor ?? AppColors.primary,
                    ),
                    onPressed: () {
                      Scaffold.of(context).openEndDrawer();
                    },
                  ),
                ),
              )
            else
              Row(
                children: [
                  _NavBarItem(
                    title: 'Inicio',
                    onTap: onHomeTap,
                    color: foregroundColor,
                    semanticLabel: 'Navegar a Inicio',
                  ),
                  const SizedBox(width: 8),
                  _NavBarItem(
                    title: 'Servicios',
                    onTap: onServicesTap,
                    color: foregroundColor,
                    semanticLabel: 'Navegar a Servicios',
                  ),
                  const SizedBox(width: 8),
                  _NavBarItem(
                    title: 'Áreas de intervención',
                    onTap: onInterventionAreasTap,
                    color: foregroundColor,
                    semanticLabel: 'Navegar a Áreas de intervención',
                  ),
                  const SizedBox(width: 8),
                  _NavBarItem(
                    title: 'Sobre mí',
                    onTap: onAboutTap,
                    color: foregroundColor,
                    semanticLabel: 'Navegar a Sobre mí',
                  ),
                  const SizedBox(width: 24),
                  Semantics(
                    button: true,
                    label: 'Ir a la sección de contacto',
                    child: ElevatedButton(
                      onPressed: onContactTap,
                      style: ElevatedButton.styleFrom(
                        backgroundColor: foregroundColor == Colors.white
                            ? AppColors.secondary
                            : AppColors.primary,
                        foregroundColor: foregroundColor == Colors.white
                            ? AppColors.primary
                            : Colors.white,
                        padding: const EdgeInsets.symmetric(
                          horizontal: 32,
                          vertical: 20,
                        ),
                        elevation: 0,
                        shape: RoundedRectangleBorder(
                          borderRadius: BorderRadius.circular(100),
                        ),
                      ),
                      child: const Text(
                        'CONTACTO',
                        style: TextStyle(
                          fontWeight: FontWeight.bold,
                          letterSpacing: 1.2,
                        ),
                      ),
                    ),
                  ),
                ],
              ),
          ],
        ),
      ),
    );
  }
}

class _NavBarItem extends StatefulWidget {
  final String title;
  final VoidCallback? onTap;
  final Color? color;
  final String semanticLabel;

  const _NavBarItem({
    required this.title,
    this.onTap,
    this.color,
    required this.semanticLabel,
  });

  @override
  State<_NavBarItem> createState() => _NavBarItemState();
}

class _NavBarItemState extends State<_NavBarItem> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      link: true,
      label: widget.semanticLabel,
      child: MouseRegion(
        onEnter: (_) => setState(() => _isHovered = true),
        onExit: (_) => setState(() => _isHovered = false),
        child: TextButton(
          onPressed: widget.onTap,
          style: TextButton.styleFrom(
            foregroundColor: widget.color ?? AppColors.text,
            padding: const EdgeInsets.symmetric(horizontal: 20, vertical: 20),
            shape: RoundedRectangleBorder(
              borderRadius: BorderRadius.circular(12),
            ),
          ),
          child: Column(
            mainAxisSize: MainAxisSize.min,
            children: [
              Text(
                widget.title,
                style: TextStyle(
                  fontWeight: _isHovered ? FontWeight.bold : FontWeight.w500,
                  fontSize: 15,
                  color: widget.color ?? AppColors.text,
                  letterSpacing: 0.5,
                ),
              ),
              const SizedBox(height: 4),
              AnimatedContainer(
                duration: const Duration(milliseconds: 200),
                width: _isHovered ? 20 : 0,
                height: 2,
                decoration: BoxDecoration(
                  color: widget.color ?? AppColors.primary,
                  borderRadius: BorderRadius.circular(2),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
