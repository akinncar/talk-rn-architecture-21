#import "Sum.h"
#import <React/RCTBridge+Private.h>
#import <React/RCTUtils.h>
#import "react-native-sum.h"

@implementation Sum

@synthesize bridge = _bridge;
@synthesize methodQueue = _methodQueue;

RCT_EXPORT_MODULE()

+ (BOOL)requiresMainQueueSetup {
  return YES;
}

- (void)setBridge:(RCTBridge *)bridge {
  _bridge = bridge;
  _setBridgeOnMainQueue = RCTIsMainQueue();

  RCTCxxBridge *cxxBridge = (RCTCxxBridge *)self.bridge;
  if (!cxxBridge.runtime) {
    return;
  }

  installSum(*(facebook::jsi::Runtime *)cxxBridge.runtime);
}

@end