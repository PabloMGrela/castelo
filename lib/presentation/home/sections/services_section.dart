import 'package:flutter/material.dart';
import '../../../core/theme/app_colors.dart';
import '../../../core/constants/app_strings.dart';

class ServicesSection extends StatelessWidget {
  const ServicesSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      width: double.infinity,
      padding: const EdgeInsets.symmetric(vertical: 80, horizontal: 20),
      color: AppColors.primary.withOpacity(0.03),
      child: Column(
        children: [
          Text(
            AppStrings.servicesTitle,
            style: Theme.of(
              context,
            ).textTheme.displayMedium?.copyWith(color: AppColors.primary),
          ),
          const SizedBox(height: 60),
          Padding(
            padding: const EdgeInsets.symmetric(horizontal: 20),
            child: Wrap(
              spacing: 40,
              runSpacing: 40,
              alignment: WrapAlignment.center,
              children: [
                _ServiceCircle(
                  title: AppStrings.service1Title,
                  description: AppStrings.service1Desc,
                  icon: Icons.people,
                  color: const Color(0xFFE8F5E9),
                ),
                _ServiceCircle(
                  title: AppStrings.service2Title,
                  description: AppStrings.service2Desc,
                  icon: Icons.psychology,
                  color: const Color(0xFFE1F5FE),
                ),
                _ServiceCircle(
                  title: AppStrings.service3Title,
                  description: AppStrings.service3Desc,
                  icon: Icons.favorite_border,
                  color: const Color(0xFFFFF3E0),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
}

class _ServiceCircle extends StatelessWidget {
  final String title;
  final String description;
  final IconData icon;
  final Color color;

  const _ServiceCircle({
    required this.title,
    required this.description,
    required this.icon,
    required this.color,
  });

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Container(
          width: 180,
          height: 180,
          decoration: BoxDecoration(
            color: color,
            shape: BoxShape.circle,
            boxShadow: [
              BoxShadow(
                color: Colors.black.withOpacity(0.05),
                blurRadius: 20,
                offset: const Offset(0, 10),
              ),
            ],
          ),
          child: Center(
            child: Icon(
              icon,
              size: 50,
              color: AppColors.primary.withOpacity(0.8),
            ),
          ),
        ),
        const SizedBox(height: 24),
        SizedBox(
          width: 250,
          child: Column(
            children: [
              Text(
                title,
                textAlign: TextAlign.center,
                style: const TextStyle(
                  fontSize: 20,
                  fontWeight: FontWeight.bold,
                  color: AppColors.text,
                ),
              ),
              const SizedBox(height: 12),
              Text(
                description,
                textAlign: TextAlign.center,
                style: TextStyle(
                  fontSize: 14,
                  color: Colors.grey[600],
                  height: 1.4,
                ),
              ),
            ],
          ),
        ),
      ],
    );
  }
}
