import 'package:flutter/material.dart';
import 'package:flutter_blog/models/post_model.dart';
import 'package:flutter_blog/services/post_service.dart';

class PostProvider with ChangeNotifier {
  bool _isLoading = false;
  final PostService _postService = PostService();

  PostModel? _post;
  List<PostModel>? _postList;

  PostModel? get post => _post;
  List<PostModel>? get postList => _postList;
  bool get isLoading => _isLoading;

  Future<void> getAllPostList() async {
    _setLoading(true);
    try {
      _postList = await _postService.getAllPostList();
    } catch (e) {
      // 에러 핸들링 로직 추가 가능 (예: 디버깅용 로그 출력)
      print('Failed to fetch post list: $e');
    } finally {
      _setLoading(false);
    }
  }

  Future<void> getPostByPostId(String postId) async {
    _setLoading(true);
    try {
      _post = await _postService.getPostById(postId);
    } catch (e) {
      // 에러 핸들링 로직 추가 가능 (예: 디버깅용 로그 출력)
      print('Failed to fetch post by ID: $e');
    } finally {
      _setLoading(false);
    }
  }

  void _setLoading(bool value) {
    _isLoading = value;
    notifyListeners();
  }
}
