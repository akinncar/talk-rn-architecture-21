#import <React/RCTBridgeModule.h>
#import "react-native-sum.h"

@interface Sum : NSObject <RCTBridgeModule>

@property (nonatomic, assign) BOOL setBridgeOnMainQueue;

@end