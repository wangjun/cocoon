<?php //リセットの実行
//管理者権限を持っているログインユーザーかどうか
if (is_user_administrator()) {
  // 4.1.0より前のPHPでは$FILESの代わりに$HTTP_POST_FILESを使用する必要あり

  //テーマ用のキャッシュディレクトリの取得
  $uploaddir = get_theme_cache_dir();
  //キャシュディレクトリのアップロードファイルパス
  $uploadfile = $uploaddir .'/'. basename($_FILES['settings']['name']);

  if (move_uploaded_file($_FILES['settings']['tmp_name'], $uploadfile)) {

    $text = get_file_contents($uploadfile);
    if ( $text ) {
      global $wpdb;
      $option_name = get_theme_mods_option_name();
      $wpdb->update(
        $wpdb->options,
        array(
          'option_value' => $text,
        ),
        array( 'option_name' => $option_name ),
        array(
          '%s',
        )
      );
      wp_filesystem_delete($uploadfile);
    }
  }

}