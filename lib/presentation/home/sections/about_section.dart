import 'package:flutter/material.dart';
import 'dart:math' as math;
import '../../../core/theme/app_colors.dart';
import '../../../core/constants/app_strings.dart';

class AboutSection extends StatelessWidget {
  const AboutSection({super.key});

  @override
  Widget build(BuildContext context) {
    return Container(
      padding: const EdgeInsets.symmetric(horizontal: 40, vertical: 80),
      child: Center(
        child: ConstrainedBox(
          constraints: const BoxConstraints(maxWidth: 1000),
          child: Column(
            children: [
              Text(
                AppStrings.aboutTitle,
                style: Theme.of(context).textTheme.displayMedium?.copyWith(
                  color: AppColors.primary,
                  fontWeight: FontWeight.w600,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 16),
              Text(
                AppStrings.aboutSubtitle,
                style: Theme.of(context).textTheme.bodyLarge?.copyWith(
                  color: Colors.grey[600],
                  fontSize: 18,
                ),
                textAlign: TextAlign.center,
              ),
              const SizedBox(height: 60),
              Wrap(
                spacing: 40,
                runSpacing: 40,
                alignment: WrapAlignment.center,
                children: const [
                  _PrincipleCard(
                    title: AppStrings.principle1Title,
                    description: AppStrings.principle1Desc,
                    icon: Icons.chat_bubble_outline,
                    rotation: 0,
                  ),
                  _PrincipleCard(
                    title: AppStrings.principle2Title,
                    description: AppStrings.principle2Desc,
                    icon: Icons.handshake_outlined,
                    rotation: 90,
                  ),
                  _PrincipleCard(
                    title: AppStrings.principle3Title,
                    description: AppStrings.principle3Desc,
                    icon: Icons.verified_outlined,
                    rotation: 270,
                  ),
                ],
              ),
              const SizedBox(height: 80),
            ],
          ),
        ),
      ),
    );
  }
}

class _PrincipleCard extends StatelessWidget {
  final String title;
  final String description;
  final IconData icon;
  final double rotation;

  const _PrincipleCard({
    required this.title,
    required this.description,
    required this.icon,
    required this.rotation,
  });

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      width: 300,
      child: AspectRatio(
        aspectRatio: 1,
        child: Stack(
          children: [
            CustomPaint(
              painter: ShapeShadowPainter(
                clipper: LeafClipper(rotation: rotation),
                shadow: Shadow(
                  color: AppColors.primary.withOpacity(0.12),
                  blurRadius: 20,
                  offset: const Offset(0, 8),
                ),
              ),
              child: Container(),
            ),
            ClipPath(
              clipper: LeafClipper(rotation: rotation),
              child: Container(color: AppColors.secondary),
            ),
            CustomPaint(
              painter: ShapeBorderPainter(
                clipper: LeafClipper(rotation: rotation),
                color: AppColors.secondary.withOpacity(0.4),
              ),
              child: Container(),
            ),
            Padding(
              padding: const EdgeInsets.all(40),
              child: Column(
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  Icon(icon, size: 48, color: AppColors.primary),
                  const SizedBox(height: 16),
                  Text(
                    title,
                    style: const TextStyle(
                      fontSize: 22,
                      fontWeight: FontWeight.bold,
                      color: AppColors.text,
                    ),
                    textAlign: TextAlign.center,
                  ),
                  const SizedBox(height: 8),
                  Text(
                    description,
                    style: TextStyle(
                      fontSize: 15,
                      color: Colors.grey[800],
                      height: 1.3,
                    ),
                    textAlign: TextAlign.center,
                    maxLines: 4,
                    overflow: TextOverflow.ellipsis,
                  ),
                ],
              ),
            ),
          ],
        ),
      ),
    );
  }
}

class LeafClipper extends CustomClipper<Path> {
  final double rotation;

  LeafClipper({required this.rotation});

  @override
  Path getClip(Size size) {
    final w = size.width;
    final h = size.height;
    final path = Path();
    path.moveTo(w * 0.5, 0);
    path.lineTo(0, 0);
    path.lineTo(0, h * 0.5);
    path.cubicTo(0, h * 0.77, w * 0.23, h, w * 0.5, h);
    path.cubicTo(w * 0.77, h, w, h * 0.77, w, h * 0.5);
    path.cubicTo(w, h * 0.23, w * 0.77, 0, w * 0.5, 0);
    path.close();
    final Matrix4 matrix = Matrix4.identity()
      ..translate(w / 2, h / 2)
      ..rotateZ(rotation * math.pi / 180)
      ..translate(-w / 2, -h / 2);
    return path.transform(matrix.storage);
  }

  @override
  bool shouldReclip(covariant LeafClipper oldClipper) =>
      oldClipper.rotation != rotation;
}

class ShapeShadowPainter extends CustomPainter {
  final CustomClipper<Path> clipper;
  final Shadow shadow;

  ShapeShadowPainter({required this.clipper, required this.shadow});

  @override
  void paint(Canvas canvas, Size size) {
    final Path path = clipper.getClip(size);
    canvas.drawShadow(path, shadow.color, shadow.blurRadius / 2, false);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}

class ShapeBorderPainter extends CustomPainter {
  final CustomClipper<Path> clipper;
  final Color color;

  ShapeBorderPainter({required this.clipper, required this.color});

  @override
  void paint(Canvas canvas, Size size) {
    final paint = Paint()
      ..color = color
      ..style = PaintingStyle.stroke
      ..strokeWidth = 2.5
      ..strokeJoin = StrokeJoin.round;
    canvas.drawPath(clipper.getClip(size), paint);
  }

  @override
  bool shouldRepaint(covariant CustomPainter oldDelegate) => true;
}
