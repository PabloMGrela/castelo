import 'package:flutter/material.dart';
import 'package:flutter_svg/flutter_svg.dart';

enum LogoVariant { full, icon, noLogo }

class LogoWidget extends StatelessWidget {
  final double size;
  final LogoVariant variant;
  final Color? color;

  const LogoWidget({
    super.key,
    this.size = 100,
    this.variant = LogoVariant.full,
    this.color,
  });

  @override
  Widget build(BuildContext context) {
    final String assetName = switch (variant) {
      LogoVariant.icon => 'assets/small_logo.svg',
      LogoVariant.noLogo => 'assets/castelo_logo_no_logo.svg',
      LogoVariant.full => 'assets/full_logo.svg',
    };

    return SvgPicture.asset(
      assetName,
      width: size,
      colorFilter: color != null
          ? ColorFilter.mode(color!, BlendMode.srcIn)
          : null,
    );
  }
}
