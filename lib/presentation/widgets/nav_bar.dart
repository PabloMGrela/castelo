import 'package:flutter/material.dart';
import '../../core/theme/app_colors.dart';
import 'logo_widget.dart';

class NavBar extends StatelessWidget implements PreferredSizeWidget {
  final VoidCallback? onHomeTap;
  final VoidCallback? onAboutTap;
  final VoidCallback? onServicesTap;
  final VoidCallback? onContactTap;
  final Color? backgroundColor;
  final Color? foregroundColor;

  const NavBar({
    super.key,
    this.onHomeTap,
    this.onAboutTap,
    this.onServicesTap,
    this.onContactTap,
    this.backgroundColor,
    this.foregroundColor,
  });

  @override
  Size get preferredSize => const Size.fromHeight(80);

  @override
  Widget build(BuildContext context) {
    final isMobile = MediaQuery.of(context).size.width < 800;

    return Container(
      color: backgroundColor ?? Colors.white.withOpacity(0.95),
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 10),
      child: Row(
        mainAxisAlignment: MainAxisAlignment.spaceBetween,
        children: [
          GestureDetector(
            onTap:
                onHomeTap ??
                () => Navigator.of(context).popUntil((route) => route.isFirst),
            child: LogoWidget(
              size: 140,
              variant: LogoVariant.full,
              color: foregroundColor,
            ),
          ),
          if (isMobile)
            Builder(
              builder: (context) => IconButton(
                icon: Icon(
                  Icons.menu,
                  color: foregroundColor ?? AppColors.primary,
                ),
                onPressed: () {
                  Scaffold.maybeOf(context)?.openEndDrawer();
                },
              ),
            )
          else
            Row(
              children: [
                _NavBarItem(
                  title: 'Inicio',
                  onTap: onHomeTap,
                  color: foregroundColor,
                ),
                const SizedBox(width: 30),
                _NavBarItem(
                  title: 'Sobre mí',
                  onTap: onAboutTap,
                  color: foregroundColor,
                ),
                const SizedBox(width: 30),
                _NavBarItem(
                  title: 'Servicios',
                  onTap: onServicesTap,
                  color: foregroundColor,
                ),
                const SizedBox(width: 30),
                _NavBarItem(
                  title: 'Contacto',
                  onTap: onContactTap,
                  color: foregroundColor,
                ),
              ],
            ),
        ],
      ),
    );
  }
}

class _NavBarItem extends StatelessWidget {
  final String title;
  final VoidCallback? onTap;
  final Color? color;

  const _NavBarItem({required this.title, this.onTap, this.color});

  @override
  Widget build(BuildContext context) {
    return TextButton(
      onPressed: onTap,
      style: TextButton.styleFrom(foregroundColor: color ?? AppColors.text),
      child: Text(
        title,
        style: Theme.of(context).textTheme.bodyMedium?.copyWith(
          fontWeight: FontWeight.w500,
          fontSize: 16,
          color: color ?? AppColors.text,
        ),
      ),
    );
  }
}
