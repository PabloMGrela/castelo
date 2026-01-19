import 'package:flutter/material.dart';
import '../../core/theme/app_colors.dart';
import '../widgets/logo_widget.dart';

class ComingSoonScreen extends StatelessWidget {
  const ComingSoonScreen({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      backgroundColor: Colors.white,
      body: Container(
        width: double.infinity,
        decoration: BoxDecoration(
          gradient: LinearGradient(
            begin: Alignment.topCenter,
            end: Alignment.bottomCenter,
            colors: [AppColors.primary.withOpacity(0.05), Colors.white],
          ),
        ),
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            const LogoWidget(
              size: 280,
              variant: LogoVariant.full,
              color: AppColors.primary,
            ),
            const SizedBox(height: 60),
            Container(
              padding: const EdgeInsets.symmetric(horizontal: 32, vertical: 12),
              decoration: BoxDecoration(
                color: AppColors.secondary,
                borderRadius: BorderRadius.circular(50),
              ),
              child: const Text(
                'PRÓXIMAMENTE',
                style: TextStyle(
                  color: AppColors.primary,
                  fontSize: 14,
                  fontWeight: FontWeight.bold,
                  letterSpacing: 4,
                ),
              ),
            ),
            const SizedBox(height: 24),
            Text(
              'Estamos construyendo algo especial.',
              style: Theme.of(context).textTheme.headlineSmall?.copyWith(
                color: AppColors.text,
                fontWeight: FontWeight.w300,
              ),
            ),
            const SizedBox(height: 64),
          ],
        ),
      ),
    );
  }
}
