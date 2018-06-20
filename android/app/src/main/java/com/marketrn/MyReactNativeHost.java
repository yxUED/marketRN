package com.marketrn;

import android.app.Application;
import android.content.Context;

import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.microsoft.codepush.react.CodePush;
import com.microsoft.codepush.react.CodePushBuilder;
import com.microsoft.codepush.react.ReactInstanceHolder;
import com.oblador.vectoricons.VectorIconsPackage;

import java.util.Arrays;
import java.util.List;

/**
 * Created by xiaoouzhai on 2018/6/15.
 */

public class MyReactNativeHost extends ReactNativeHost implements ReactInstanceHolder {

    private Context mContext;
    protected MyReactNativeHost(Application application) {
        super(application);
        this.mContext  =application;
    }


    @Override
    protected String getJSBundleFile() {
//          return super.getJSBundleFile();
        return CodePush.getJSBundleFile();
    }

    @Override
    public boolean getUseDeveloperSupport() {
        return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
        return Arrays.<ReactPackage>asList(
                new MainReactPackage(),
                new VectorIconsPackage(),
                new CodePushBuilder(mContext.getResources().getString(R.string.reactNativeCodePush_androidDeploymentKey),mContext)
                        .setIsDebugMode(BuildConfig.DEBUG)
                        .setServerUrl(mContext.getResources().getString(R.string.reactNativeCodePush_androidServerURL))
                        .build()
        );
    }

    @Override
    protected String getJSMainModuleName() {
        return "index";
    }
}
