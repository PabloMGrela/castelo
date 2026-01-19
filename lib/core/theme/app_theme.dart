import 'package:flutter/material.dart';
import 'package:google_fonts/google_fonts.dart';
import 'app_colors.dart';

class AppTheme {
  static ThemeData get lightTheme {
    return ThemeData(
      primaryColor: AppColors.primary,
      scaffoldBackgroundColor: AppColors.background,
      colorScheme: ColorScheme.fromSeed(
        seedColor: AppColors.primary,
        primary: AppColors.primary,
        secondary: AppColors.secondary,
        background: AppColors.background,
      ),
      textTheme: TextTheme(
        // Using Inter for Body text
        bodyMedium: GoogleFonts.inter(color: AppColors.text),
        bodyLarge: GoogleFonts.inter(color: AppColors.text),
        bodySmall: GoogleFonts.inter(color: AppColors.text),

        // Using a Serif font as fallback for "Delight" if we don't have it yet.
        // GoogleFonts.playfairDisplay is a good premium serif alternative.
        displayLarge: GoogleFonts.playfairDisplay(
          color: AppColors.primary,
          fontWeight: FontWeight.bold,
        ),
        displayMedium: GoogleFonts.playfairDisplay(
          color: AppColors.primary,
          fontWeight: FontWeight.w600,
        ),
        titleLarge: GoogleFonts.playfairDisplay(
          color: AppColors.text,
          fontWeight: FontWeight.w600,
        ),
      ),
      useMaterial3: true,
    );
  }
}
