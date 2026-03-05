import 'package:flutter/material.dart';
import 'package:url_launcher/url_launcher.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/constants/app_strings.dart';

class ContactSection extends StatelessWidget {
  const ContactSection({super.key});

  Future<void> _launchUrl(String url) async {
    final Uri uri = Uri.parse(url);
    if (!await launchUrl(uri)) {
      throw Exception('Could not launch $url');
    }
  }

  @override
  Widget build(BuildContext context) {
    final size = MediaQuery.of(context).size;
    final isMobile = size.width < 900;

    return Semantics(
      container: true,
      label: 'Sección de Contacto y Ubicación',
      child: Container(
        width: double.infinity,
        padding: EdgeInsets.fromLTRB(
          isMobile ? 24 : 64,
          120,
          isMobile ? 24 : 64,
          60,
        ),
        color: AppColors.primary,
        child: Center(
          child: ConstrainedBox(
            constraints: const BoxConstraints(maxWidth: 1200),
            child: Column(
              children: [
                // Header
                Column(
                  children: [
                    Semantics(
                      label: 'Título de la sección',
                      child: Text(
                        AppStrings.contactTitle.toUpperCase(),
                        style: const TextStyle(
                          color: AppColors.secondary,
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
                        AppStrings.contactSubtitle,
                        textAlign: TextAlign.center,
                        style:
                            Theme.of(context).textTheme.displaySmall?.copyWith(
                                  color: Colors.white,
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
                const SizedBox(height: 100),

                // Contact Grid
                Wrap(
                  spacing: 24,
                  runSpacing: 24,
                  alignment: WrapAlignment.center,
                  children: [
                    _ContactCard(
                      icon: Icons.phone_android_rounded,
                      title: AppStrings.contactPhoneTitle,
                      content: AppStrings.contactPhoneVal,
                      subtitle: AppStrings.contactPhoneSub,
                      onTap: () => _launchUrl(AppStrings.urlTel),
                      semanticLabel: 'Llamar por teléfono',
                    ),
                    _ContactCard(
                      icon: Icons.alternate_email_rounded,
                      title: AppStrings.contactEmailTitle,
                      content: AppStrings.contactEmailVal,
                      subtitle: AppStrings.contactEmailSub,
                      onTap: () => _launchUrl(AppStrings.urlMail),
                      semanticLabel: 'Enviar un correo electrónico',
                    ),
                    _ContactCard(
                      icon: Icons.map_outlined,
                      title: AppStrings.contactLocTitle,
                      content: AppStrings.contactLocVal,
                      subtitle: AppStrings.contactLocSub,
                      onTap: () => _launchUrl(AppStrings.urlMaps),
                      semanticLabel: 'Ver ubicación en el mapa',
                    ),
                    _ContactCard(
                      icon: Icons.camera_alt_outlined,
                      title: AppStrings.contactInstaTitle,
                      content: AppStrings.contactInstaVal,
                      subtitle: AppStrings.contactInstaSub,
                      onTap: () => _launchUrl(AppStrings.urlInsta),
                      semanticLabel: 'Abrir perfil de Instagram',
                    ),
                  ],
                ),

                const SizedBox(height: 120),

                // Footer
                Column(
                  children: [
                    ExcludeSemantics(
                      child: Divider(
                        color: Colors.white.withValues(alpha: 0.1),
                        height: 1,
                      ),
                    ),
                    const SizedBox(height: 48),
                    Row(
                      mainAxisAlignment: MainAxisAlignment.center,
                      children: [
                        Text(
                          AppStrings.copyright,
                          style: TextStyle(
                            color: Colors.white.withValues(alpha: 0.5),
                            fontSize: 14,
                          ),
                        ),
                        const SizedBox(width: 12),
                        const ExcludeSemantics(
                          child: Icon(
                            Icons.favorite_rounded,
                            size: 16,
                            color: Color(0x99CCFFE0), // AppColors.secondary
                          ),
                        ),
                      ],
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

class _ContactCard extends StatefulWidget {
  final IconData icon;
  final String title;
  final String content;
  final String subtitle;
  final VoidCallback onTap;
  final String semanticLabel;

  const _ContactCard({
    required this.icon,
    required this.title,
    required this.content,
    required this.subtitle,
    required this.onTap,
    required this.semanticLabel,
  });

  @override
  State<_ContactCard> createState() => _ContactCardState();
}

class _ContactCardState extends State<_ContactCard> {
  bool _isHovered = false;

  @override
  Widget build(BuildContext context) {
    return Semantics(
      button: true,
      label: '${widget.title}: ${widget.content}. ${widget.subtitle}',
      onTapHint: widget.semanticLabel,
      child: MouseRegion(
        onEnter: (_) => setState(() => _isHovered = true),
        onExit: (_) => setState(() => _isHovered = false),
        child: InkWell(
          onTap: widget.onTap,
          borderRadius: BorderRadius.circular(32),
          child: AnimatedContainer(
            duration: const Duration(milliseconds: 300),
            width: 280,
            padding: const EdgeInsets.symmetric(horizontal: 24, vertical: 48),
            decoration: BoxDecoration(
              color: _isHovered
                  ? Colors.white.withValues(alpha: 0.12)
                  : Colors.white.withValues(alpha: 0.05),
              borderRadius: BorderRadius.circular(32),
              border: Border.all(
                color: _isHovered
                    ? AppColors.secondary.withValues(alpha: 0.5)
                    : Colors.white.withValues(alpha: 0.1),
                width: 1.5,
              ),
            ),
            child: Column(
              children: [
                ExcludeSemantics(
                  child: AnimatedContainer(
                    duration: const Duration(milliseconds: 300),
                    padding: const EdgeInsets.all(20),
                    decoration: BoxDecoration(
                      color: _isHovered
                          ? AppColors.secondary
                          : Colors.white.withValues(alpha: 0.1),
                      shape: BoxShape.circle,
                    ),
                    child: Icon(
                      widget.icon,
                      color:
                          _isHovered ? AppColors.primary : AppColors.secondary,
                      size: 28,
                    ),
                  ),
                ),
                const SizedBox(height: 32),
                Text(
                  widget.title.toUpperCase(),
                  style: TextStyle(
                    fontSize: 12,
                    fontWeight: FontWeight.bold,
                    color: AppColors.secondary.withValues(alpha: 0.8),
                    letterSpacing: 2.0,
                  ),
                ),
                const SizedBox(height: 16),
                Text(
                  widget.content,
                  textAlign: TextAlign.center,
                  style: const TextStyle(
                    fontSize: 18,
                    fontWeight: FontWeight.bold,
                    color: Colors.white,
                  ),
                ),
                const SizedBox(height: 8),
                Text(
                  widget.subtitle,
                  style: TextStyle(
                    fontSize: 13,
                    color: Colors.white.withValues(alpha: 0.5),
                    height: 1.4,
                  ),
                  textAlign: TextAlign.center,
                ),
              ],
            ),
          ),
        ),
      ),
    );
  }
}
