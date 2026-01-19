import 'package:flutter_test/flutter_test.dart';
import 'package:castelo/main.dart';
import 'package:castelo/core/constants/app_strings.dart';

void main() {
  testWidgets('App smoke test', (WidgetTester tester) async {
    // Build our app and trigger a frame.
    await tester.pumpWidget(const MyApp());

    // Verify that our app starts and shows the hero tagline.
    // Note: Since HeroSection uses Image.network, we might need to pump and settle
    // or use a mock for network images if we were doing more complex testing.
    // For a simple smoke test, we just check if the basic structure is there.
    expect(find.byType(MyApp), findsOneWidget);

    // Check for some text from AppStrings to ensure the home screen is loaded
    expect(find.text(AppStrings.heroTagline), findsOneWidget);
  });
}
