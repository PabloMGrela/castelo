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
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 100, horizontal: 20),
      color: Colors.white,
      child: Column(
        children: [
          Text(
            AppStrings.contactTitle,
            style: Theme.of(context).textTheme.displayMedium?.copyWith(
              color: AppColors.primary,
              fontWeight: FontWeight.bold,
            ),
          ),
          const SizedBox(height: 16),
          Text(
            AppStrings.contactSubtitle,
            style: Theme.of(context).textTheme.bodyLarge?.copyWith(
              color: Colors.grey[600],
              fontSize: 18,
            ),
            textAlign: TextAlign.center,
          ),
          const SizedBox(height: 80),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Wrap(
              spacing: 40,
              runSpacing: 40,
              alignment: WrapAlignment.center,
              children: [
                _ContactCard(
                  icon: Icons.phone_outlined,
                  title: AppStrings.contactPhoneTitle,
                  content: AppStrings.contactPhoneVal,
                  subtitle: AppStrings.contactPhoneSub,
                  onTap: () => _launchUrl(AppStrings.urlTel),
                ),
                _ContactCard(
                  icon: Icons.email_outlined,
                  title: AppStrings.contactEmailTitle,
                  content: AppStrings.contactEmailVal,
                  subtitle: AppStrings.contactEmailSub,
                  onTap: () => _launchUrl(AppStrings.urlMail),
                ),
                _ContactCard(
                  icon: Icons.location_on_outlined,
                  title: AppStrings.contactLocTitle,
                  content: AppStrings.contactLocVal,
                  subtitle: AppStrings.contactLocSub,
                  onTap: () => _launchUrl(AppStrings.urlMaps),
                ),
                _ContactCard(
                  icon: Icons.camera_alt_outlined,
                  title: AppStrings.contactInstaTitle,
                  content: AppStrings.contactInstaVal,
                  subtitle: AppStrings.contactInstaSub,
                  onTap: () => _launchUrl(AppStrings.urlInsta),
                ),
              ],
            ),
          ),
          const SizedBox(height: 100),
          const Divider(color: Colors.black12),
          const SizedBox(height: 40),
          Opacity(
            opacity: 0.6,
            child: Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(AppStrings.copyright),
                const SizedBox(width: 8),
                const Icon(Icons.favorite, size: 14, color: AppColors.primary),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _ContactCard extends StatelessWidget {
  final IconData icon;
  final String title;
  final String content;
  final String subtitle;
  final VoidCallback onTap;

  const _ContactCard({
    required this.icon,
    required this.title,
    required this.content,
    required this.subtitle,
    required this.onTap,
  });

  @override
  Widget build(BuildContext context) {
    return InkWell(
      onTap: onTap,
      borderRadius: BorderRadius.circular(32),
      child: Container(
        width: 320,
        padding: const EdgeInsets.all(32),
        decoration: BoxDecoration(
          color: AppColors.primary.withOpacity(0.04),
          borderRadius: BorderRadius.circular(32),
          border: Border.all(
            color: AppColors.primary.withOpacity(0.1),
            width: 2,
          ),
        ),
        child: Column(
          children: [
            Container(
              padding: const EdgeInsets.all(16),
              decoration: BoxDecoration(
                color: Colors.white,
                shape: BoxShape.circle,
                boxShadow: [
                  BoxShadow(
                    color: AppColors.primary.withOpacity(0.1),
                    blurRadius: 10,
                    offset: const Offset(0, 4),
                  ),
                ],
              ),
              child: Icon(icon, color: AppColors.primary, size: 32),
            ),
            const SizedBox(height: 24),
            Text(
              title,
              style: const TextStyle(
                fontSize: 16,
                fontWeight: FontWeight.w600,
                color: AppColors.text,
                letterSpacing: 0.5,
              ),
            ),
            const SizedBox(height: 8),
            Text(
              content,
              style: const TextStyle(
                fontSize: 18,
                fontWeight: FontWeight.bold,
                color: AppColors.primary,
              ),
            ),
            const SizedBox(height: 4),
            Text(
              subtitle,
              style: TextStyle(fontSize: 14, color: Colors.grey[600]),
              textAlign: TextAlign.center,
            ),
          ],
        ),
      ),
    );
  }
}
