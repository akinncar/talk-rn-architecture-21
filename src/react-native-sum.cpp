#include "react-native-sum.h"
#include <sstream>

using namespace facebook;

void installSum(jsi::Runtime& jsiRuntime) {
  auto installSum = jsi::Function::createFromHostFunction(
    jsiRuntime,
    jsi::PropNameID::forAscii(jsiRuntime, "sum"),
    2,
    [](
        jsi::Runtime& runtime, 
        const jsi::Value& thisValue, 
        const jsi::Value* arguments, 
        size_t count
    ) -> jsi::Value {

      if(!arguments[0].isNumber() || !arguments[1].isNumber()) {
        jsi::detail::throwJSError(runtime, "Non number arguments passed to sum");
      }

      double result = arguments[0].asNumber() + arguments[1].asNumber();
      return jsi::Value(result);
    }
  );

  jsiRuntime.global().setProperty(jsiRuntime, "sum", std::move(sum));
}