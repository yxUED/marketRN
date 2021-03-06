package com.marketrn;

import android.app.Application;

import com.facebook.react.ReactApplication;
import com.microsoft.codepush.react.CodePushBuilder;
import com.oblador.vectoricons.VectorIconsPackage;
import com.microsoft.codepush.react.CodePush;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;

import java.util.Arrays;
import java.util.List;

import javax.annotation.Nullable;

public class MainApplication extends Application implements ReactApplication {

//  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
//
//        @Override
//        protected String getJSBundleFile() {
////          return super.getJSBundleFile();
//        return CodePush.getJSBundleFile();
//        }
//
//    @Override
//    public boolean getUseDeveloperSupport() {
//      return BuildConfig.DEBUG;
//    }
//
//    @Override
//    protected List<ReactPackage> getPackages() {
//      return Arrays.<ReactPackage>asList(
//          new MainReactPackage(),
//            new VectorIconsPackage(),
//            new CodePushBuilder(getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey),getApplicationContext())
//                .setIsDebugMode(BuildConfig.DEBUG)
//                .setServerUrl(getResources().getString(R.string.reactNativeCodePush_androidServerURL))
//                .build()
//      );
//    }
//
//    @Override
//    protected String getJSMainModuleName() {
//      return "index";
//    }
//  };

  private MyReactNativeHost mReactNativeHost = new MyReactNativeHost(this);
  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    CodePush.setReactInstanceHolder(mReactNativeHost);
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);

  }

}
