@ReactModule(name = SumModule.NAME)
public class SumModule extends ReactContextBaseJavaModule {
    public static final String NAME = "SumModule";

    public SumModule(ReactApplicationContext reactContext) {
        super(reactContext);
    }

    @Override
    @NonNull
    public String getName() {
        return NAME;
    }

    @ReactMethod
    public void sum(int a, int b, Promise promise) {
        promise.resolve(a + b);
    }
}
